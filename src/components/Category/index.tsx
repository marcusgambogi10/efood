import Tag from '../Tag'
import Button from '../Button'
import * as S from './styles'

import star from '../../assets/images/star.svg'

type Props = {
  food: Food
}

const Category = ({ food }: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 210) {
      return description.slice(0, 207) + '...'
    }
  }

  return (
    <S.ContainerProduct>
      {food.destacado && <Tag size="big">Mais vendidos</Tag>}
      <img src={food.capa} alt="foto do produto" />
      <Tag size="small">{food.tipo}</Tag>
      <S.NameContainer>
        <h3>{food.titulo}</h3>
        <div>
          <span>{food.avaliacao}</span>
          <span>
            <img src={star} alt="estrela" />
          </span>
        </div>
      </S.NameContainer>
      <S.Text>{getDescription(food.descricao)}</S.Text>
      <Button
        type="button"
        title="clique aqui para ir para a página do produto"
        to={`/product/${food.id}`}
      >
        Saiba mais
      </Button>
    </S.ContainerProduct>
  )
}

export default Category
