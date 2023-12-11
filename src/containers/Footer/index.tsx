import * as S from './styles'
import { Logo } from '../../components/Logo'
import logoInstagramImg from '../../assets/images/redes_sociais/instagram-logo-svg.svg'
import logoFacebookImg from '../../assets/images/redes_sociais/facebook-logo-svg.svg'
import logoTwitterImg from '../../assets/images/redes_sociais/twitter-logo-svg.svg'

const Footer = () => {
  return (
    <S.FooterStyle>
      <Logo />
      <S.ListaRedesSociais>
        <li>
          <S.LinkRedeSocial>
            <img src={logoInstagramImg} />
          </S.LinkRedeSocial>
        </li>
        <li>
          <S.LinkRedeSocial>
            <img src={logoFacebookImg} />
          </S.LinkRedeSocial>
        </li>
        <li>
          <S.LinkRedeSocial>
            <img src={logoTwitterImg} />
          </S.LinkRedeSocial>
        </li>
      </S.ListaRedesSociais>
      <S.TextoFooter>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.TextoFooter>
    </S.FooterStyle>
  )
}

export default Footer
