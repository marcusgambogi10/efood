import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Banner = styled.div`
  width: 100%;
  height: 436px;
  background-repeat: no-repeat;
  background-size: cover; //ocupa toda largura disponivel
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
  }
`

export const Category = styled.p`
  width: 101px;
  height: 33.25px;
  font-size: 32px;
  font-weight: 100;
  line-height: 38px;
  text-align: left;
  color: #fff;
  padding-top: 55px;
  position: relative;
  z-index: 1;
`

export const Title = styled.p`
  padding-top: 244px;
  width: 676px;
  height: 33.25px;
  font-size: 32px;
  font-weight: 900;
  line-height: 38px;
  text-align: left;
  color: #fff;
  position: relative;
  z-index: 1;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`
