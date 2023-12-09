import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import ig from '../../assets/images/ig.svg'
import fb from '../../assets/images/fb.svg'
import tt from '../../assets/images/tt.svg'

const Footer = () => {
  return (
    <S.Footer>
      <div>
        <S.LogoImg src={logo} alt="logo-efood" />
        <S.SocialMedia>
          <a href="#">
            <img src={ig} alt="logo instagram" />
          </a>
          <a href="#">
            <img src={fb} alt="logo facebook" />
          </a>
          <a href="#">
            <img src={tt} alt="logo twitter" />
          </a>
        </S.SocialMedia>
      </div>
      <S.TextFooter>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.TextFooter>
    </S.Footer>
  )
}

export default Footer
