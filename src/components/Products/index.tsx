import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import { BtnProduct, colors } from '../../styles'

import close from '../../assets/images/close.png'

import { useGetTypeQuery } from '../../services/api'

import { openModal, closeModal } from '../../store/reducers/modal'
import { RootReducer } from '../../store'
import { addToCart, openCart } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'
import Loader from '../Loader'

const Products = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.modal)
  const dispatch = useDispatch()

  const { id } = useParams()
  const { data: food } = useGetTypeQuery(id!)

  const [produto, setProduto] = useState<Item>()

  if (!food?.cardapio) {
    return <Loader />
  }

  const getDescription = (descricao: string) => {
    if (descricao.length > 120) {
      return descricao.slice(0, 117) + '...'
    }
  }

  const toOpenModal = (item: Item) => {
    setProduto(item)
    dispatch(openModal())
  }

  const toCloseModal = () => {
    dispatch(closeModal())
  }

  const toAddCart = () => {
    if (produto) {
      dispatch(addToCart(produto))
      dispatch(openCart())
      dispatch(closeModal())
    } else {
      ;<div>erro</div>
    }
  }

  return (
    <>
      <div className="container">
        <S.ContainerSection>
          {food?.cardapio && food.cardapio.length > 0 ? (
            food.cardapio.map((item) => (
              <div key={item.id}>
                <div>
                  <S.ContainerProduct>
                    <div>
                      <S.ImagemProduto src={item.foto} alt="imagem do prato" />
                      <S.TitleProduct>{item.nome}</S.TitleProduct>
                      <S.DescriptionProduct>
                        {getDescription(item.descricao)}
                      </S.DescriptionProduct>
                      <BtnProduct
                        title={`Cliquei aqui para adicionar ${item.nome} ao carrinho`}
                        onClick={() => {
                          toOpenModal(item)
                        }}
                        style={{ backgroundColor: `${colors.secundary}` }}
                      >
                        Adicionar ao carrinho
                      </BtnProduct>
                    </div>
                  </S.ContainerProduct>
                </div>
              </div>
            ))
          ) : (
            <h2>Nenhum item encontrado</h2>
          )}
        </S.ContainerSection>
      </div>

      <S.Modal className={isOpen ? 'isVisible' : ''}>
        <S.ModalContent className="container">
          <div>
            <S.ImagemPrato src={produto?.foto} alt="imagem do prato" />
          </div>

          <img src={close} alt="fechar" onClick={toCloseModal} />

          <div>
            <h4>{produto?.nome}</h4>
            <S.productDescription>{produto?.descricao}</S.productDescription>
            <p>{produto?.porcao}</p>
            <BtnProduct
              title={`Cliquei aqui para adicionar ${produto?.nome} ao carrinho`}
              onClick={toAddCart}
            >
              Adicionar ao carrinho - {parseToBrl(produto?.preco)}
            </BtnProduct>
          </div>
        </S.ModalContent>
        <div className="overlay" onClick={toCloseModal}></div>
      </S.Modal>
    </>
  )
}

export default Products
