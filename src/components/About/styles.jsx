import styled from 'styled-components'
import { Element } from 'react-scroll'

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

export const AnimatedLogo = styled.img`
  margin-top: 1rem;
  margin-bottom: -5rem;
  width: 250px;
  animation: spinHorizontal 5s linear infinite;

  @keyframes spinHorizontal {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }

  @media (min-width: 840px) {
    margin: 0 auto;
    width: 80%;
  }
`
