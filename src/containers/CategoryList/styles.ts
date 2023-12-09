import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.section`
  margin-top: 80px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
