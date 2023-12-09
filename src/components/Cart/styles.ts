import styled from 'styled-components'

import { colors } from '../../styles'
import { ButtonLink } from '../Button/styles'

import lixeira from '../../assets/images/lixeira.svg'

import InputMask from 'react-input-mask'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.primary};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  ${ButtonLink} {
    display: block;
    max-width: 100%;
    width: 100%;
    margin: 0;
    background-color: ${colors.secundary};
    color: ${colors.primary};
    font-weight: bold;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  margin-bottom: 24px;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;

  span {
    font-size: 12px;
    color: ${colors.secundary};
  }
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.secundary};
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }
  h3 {
    color: ${colors.primary};
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 16px;
  }
  span {
    display: block;
    color: ${colors.primary};
    font-size: 14px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const Delivery = styled.div`
  h3 {
    color: ${colors.secundary};
    width: 100%;
    height: 19px;
    font-weight: bold;
    font-size: 16px;
    line-height: 18.75px;
    margin-bottom: 16px;
  }
  label {
    color: ${colors.secundary};
  }
  input {
    height: 32px;
    margin: 8px 0;
    background-color: ${colors.secundary};
    border: none;

    &.error {
      border: 3px solid red;
    }
  }

  > p {
    color: ${colors.secundary};
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
  }
`

export const InputDelivery = styled.input`
  width: 344px;
  height: 32px;
  display: block;
  width: 100%;
  margin: 8px 0;
  background-color: ${colors.secundary};
  border: none;

  &.error {
    border: 3px solid red;
  }
`

export const InputsWithDisplayFlex = styled.div`
  display: flex;
  column-gap: 22px;
`

export const InputNumber = styled(InputMask)`
  width: 218px;
`
export const InputCode = styled(InputMask)`
  width: 87px;
`
