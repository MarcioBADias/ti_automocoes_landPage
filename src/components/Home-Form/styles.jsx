import styled from 'styled-components'
import { Element } from 'react-scroll'

export const Container = styled(Element)`
  align-items: 'center';
  display: 'flex';
  justify-content: 'center';
  padding: 1rem 2rem;

  @media (min-width: 840px) {
    margin-top: 10%;
    padding: 1rem;
    width: 50%;
  }
`

export const AnimatedLogo = styled.img`
  margin: 1rem 0 -5rem 0rem;
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
    align-items: center;
    margin: 1rem 0 -5rem 15rem;
    width: 35%;
  }
`
