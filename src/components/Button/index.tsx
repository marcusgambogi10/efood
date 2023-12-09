import { ButtonLink } from './styles'

type Props = {
  type: 'button' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  return (
    <ButtonLink type={type} to={to as string} title={title} onClick={onClick}>
      {children}
    </ButtonLink>
  )
}

export default Button
