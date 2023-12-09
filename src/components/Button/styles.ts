import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { breakpoints, colors } from '../../styles'

export const ButtonLink = styled(Link)`
  padding: 4px 6px;
  background-color: ${colors.primary};
  color: ${colors.secundary};
  margin-left: 8px;
  text-decoration: none;
  font-size: 14px;
  line-height: 16px;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    margin-top: 55px;
  }
`
