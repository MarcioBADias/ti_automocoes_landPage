import { Element } from 'react-scroll'
import styled from 'styled-components'

export const Container = styled(Element)`
  display: flex;
  margin-top: 10%;

  @media (min-width: 840px) {
    width: 100vw;
  }
`
export const BoxInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
  width: 100vw;
`
export const BoxItem = styled.div`
  background: #FFFFFF;
  border-radius: 10px;
  color: var(--color-secondary);
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
  padding: 1rem;
  min-width: 40%;

  @media (min-width: 840px) {
    
  }
`
