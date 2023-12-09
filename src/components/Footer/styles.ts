import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Footer = styled.footer`
  height: 298px;
  width: 100%;
  background-color: ${colors.secundary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
export const LogoImg = styled.img`
  height: 57.5px;
  width: 125px;
  margin-top: 40px;
`

export const SocialMedia = styled.div`
  display: flex;
  column-gap: 8px;
  margin-left: 16px;
  margin-top: 32px;
`

export const TextFooter = styled.p`
  height: 24px;
  width: 480px;
  font-family: Roboto;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  text-align: center;
  color: ${colors.primary};
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`
