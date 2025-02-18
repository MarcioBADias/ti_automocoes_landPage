import { Element } from 'react-scroll'
import styled from 'styled-components'

export const Container = styled(Element)`
  align-items: 'center';
  display: 'flex';
  justify-content: 'center';
  padding: 1rem 2rem;
  margin-top: 10%;

  @media (min-width: 840px) {
    padding: 1rem;
    width: 50%;
  }
`
export const BoxInfo = styled.div`
  background: var(--color-light);
  border-radius: 10px;
  color: var(--color-primary);
  display: flex;
  justify-content: space-around;
  width: 20%;
`
