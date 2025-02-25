import { Element } from 'react-scroll'
import styled from 'styled-components'

export const Container = styled(Element)`
  display: flex;
  padding: 1rem 2rem;
  margin-top: 10%;

  @media (min-width: 840px) {
    padding: 1rem;
    width: 100%;
  }
`
export const BoxInfo = styled.div`
  background: var(--color-light);
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 1rem;
  width: 20%;
`
export const BoxItem = styled.div`
  color: var(--color-secondary);
`
