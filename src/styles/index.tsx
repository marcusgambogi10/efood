import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const colors = {
  background: '#FFF8F2',
  primary: '#E66767',
  secundary: '#FFEBD9'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '450px'
}

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;

  }

  body{
    background-color: ${colors.background};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`
export const BtnProduct = styled.button`
  width: 304px;
  height: 24px;
  background-color: #fff;
  color: ${colors.primary};
  border: transparent;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  cursor: pointer;
`

export default GlobalStyle
