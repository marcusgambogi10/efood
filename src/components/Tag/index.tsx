import * as S from './styles'

export type Props = {
  size: 'small' | 'big'
  children: string
}

const Tag = ({ children, size = 'small' }: Props) => {
  return <S.Tag size={size}>{children}</S.Tag>
}

export default Tag
