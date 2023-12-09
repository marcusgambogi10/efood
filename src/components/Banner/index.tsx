import * as S from './styles'

type Props = {
  banner: string
  title: string
  type: string
}

const Banner = ({ banner, title, type }: Props) => {
  return (
    <S.Banner style={{ backgroundImage: `url(${banner})`, objectFit: 'cover' }}>
      <div className="container">
        <S.Category>{type}</S.Category>
        <S.Title>{title}</S.Title>
      </div>
    </S.Banner>
  )
}

export default Banner
