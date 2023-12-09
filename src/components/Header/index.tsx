import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'

import * as S from './styles'

import bg from '../../assets/images/bg-hero.png'
import logo from '../../assets/images/logo.svg'

import { openCart } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import { usePurchaseMutation } from '../../services/api'

type Props = {
  alternativeStyle?: boolean
  alternativeContent?: boolean
  alternativeSubtitle?: boolean
}

const Header: React.FC<Props> = ({
  alternativeStyle,
  alternativeContent,
  alternativeSubtitle
}) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const toOpenCart = () => {
    if (items.length === 0) {
      return <Navigate to="/" />
    } else {
      dispatch(openCart())
    }
  }

  const headerStyle = alternativeStyle ? 'alternative-header' : 'default-header'
  const additionalParagraph = alternativeContent ? (
    <S.LinkCart title="Clique para abrir o carrinho" onClick={toOpenCart}>
      {items.length} pedido(s) no carrinho
    </S.LinkCart>
  ) : null
  const subtitle = alternativeSubtitle ? (
    <Link title="Clique para voltar para tela inicial" to="/">
      Restaurantes
    </Link>
  ) : (
    <div>Viva experiências gastronômicas no conforto da sua casa</div>
  )

  return (
    <S.Header className={headerStyle} style={{ backgroundImage: `url(${bg})` }}>
      <S.DivContent>
        <p>{additionalParagraph}</p>
        <h1>
          <img src={logo} alt="Logo - efood" />
        </h1>
        <h2>{subtitle}</h2>
      </S.DivContent>
    </S.Header>
  )
}

export default Header
