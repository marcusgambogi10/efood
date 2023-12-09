import * as S from './styles'
import Category from '../../components/Category'

type Props = {
  categorys: Food[]
}

const CategoryList = ({ categorys }: Props) => {
  return (
    <S.Container>
      <div className="container">
        <S.List>
          {categorys.map((category) => (
            <Category
              key={category.id}
              food={{
                id: category.id,
                titulo: category.titulo,
                destacado: category.destacado,
                tipo: category.tipo,
                avaliacao: category.avaliacao,
                descricao: category.descricao,
                capa: category.capa
              }}
            />
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default CategoryList
