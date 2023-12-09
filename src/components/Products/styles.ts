import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const ContainerSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 56px;

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 16px;
  }
`

export const ContainerProduct = styled.div`
  width: 320px;
  height: 338px;
  background-color: ${colors.primary};
  margin-bottom: 32px;

  & > div {
    padding: 8px;
  }
`

export const ImagemProduto = styled.img`
  margin-bottom: 8px;
  width: 304px;
  height: 167px;
  object-fit: cover;
`

export const TitleProduct = styled.h3`
  width: 100%;
  height: 19px;
  font-size: 16px;
  font-weight: 900;
  line-height: 19px;
  margin-bottom: 8px;
  color: #fff;
`

export const DescriptionProduct = styled.p`
  width: 304px;
  height: 88px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 8px;
  color: #fff;
`
export const Modal = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    & > p {
      width: 45%;
    }
  }

  &.isVisible {
    display: block;
  }

  .container {
    display: flex;
    padding: 32px;
    gap: 24px;
    background-color: ${colors.primary};
    top: 300px;

    @media (max-width: ${breakpoints.tablet}) {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    h4 {
      font-size: 18px;
      font-weight: bold;
      line-height: 21px;
      color: #fff;
    }

    p {
      font-size: 14px;
      line-height: 22px;
      text-align: left;
      color: #fff;
      margin: 16px 0;
    }

    > img {
      width: 16px;
      height: 16px;
      position: absolute;
      top: 16px;
      right: 16px;
    }
  }
  .overlay {
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ImagemPrato = styled.img`
  max-width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 44%;
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;

  > img {
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`

export const productDescription = styled.p`
  @media (max-width: ${breakpoints.tablet}) {
    width: 300px;
  }
`
