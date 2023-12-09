import styled from 'styled-components'

import { colors } from '../../styles'
import { Props } from '.'

export const Tag = styled.div<Props>`
  width: ${(props) => (props.size === 'big' ? '121px' : '61px')};
  height: 26px;
  background-color: ${colors.primary};
  padding: 6px 4px;
  color: ${colors.secundary};
  font-size: 12px;
  font-weight: bold;
  line-height: 14px;
  text-align: center;
  position: absolute;
  top: 16px;
  right: ${(props) => (props.size === 'big' ? '85px' : '16px')};
`
