import styled from 'styled-components'

import { breakpoints, colors } from '../../styles/index'

export const Header = styled.header`
  height: 384px;
  width: 100%;

  @media (max-width: ${breakpoints.desktop}) {
    position: relative;
  }

  &.alternative-header {
    height: 186px;

    & > div {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-evenly;
      padding-top: 63px;

      @media (max-width: ${breakpoints.mobile}) {
        flex-direction: column;
      }

      & > p {
        width: 256px;
        height: 21px;
        font-family: Roboto;
        font-size: 18px;
        font-weight: bold;
        line-height: 21px;
        text-align: right;
        color: ${colors.primary};
      }

      & > h1 {
        margin-top: 0;
      }

      & > h2 {
        margin-top: 0;
        width: 109px;
        height: 21px;
        font-size: 18px;
        font-weight: bold;
        line-height: 21px;

        & > a {
          color: ${colors.primary};
        }
      }
    }
  }
`

export const LinkCart = styled.a`
  color: ${colors.primary};
  cursor: pointer;

  @media (max-width: ${breakpoints.mobile}) {
    position: absolute;
    top: 27px;
    left: 100px;
  }
`

export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 64px;
  }
  h2 {
    margin-top: 138px;
    width: 539px;
    height: 84px;
    font-size: 36px;
    font-weight: bold;
    line-height: 42px;
    text-align: center;
    color: ${colors.primary};

    @media (max-width: ${breakpoints.tablet}) {
      margin-top: 68px;
      width: 80%;
      font-size: 24px;
    }
  }
`
