import styled from 'styled-components'

export const Container = styled.div`
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
`

export const AnimatedLogo = styled.img`
  margin: 2rem 0;
  width: 150px;
  animation: spinHorizontal 5s linear infinite;

  @keyframes spinHorizontal {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
`
