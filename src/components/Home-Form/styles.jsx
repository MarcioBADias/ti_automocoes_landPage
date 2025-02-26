import styled from 'styled-components'
import { Element } from 'react-scroll'

export const Container = styled(Element)`
  align-items: 'center';
  display: 'flex';
  justify-content: 'center';
  padding: 1rem 2rem;

  @media (min-width: 840px) {
    margin-top: 8%;
    padding: 1rem;
    width: 50%;
  }
`

export const TextTitle = styled.div`
  font-size: 3.5rem;
  font-weight: bold;
  text-align: left;
`

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
export const Card = styled.div`
  align-items: center;
  background: #ffffff;
  display: flex;
  border-radius: 10px;
  border: 2px solid black;
  box-shadow: 5px 5px 0px black;
  font-family: Arial, sans-serif;
  margin-top: 1rem;
  padding: 0.5rem;
  width: 31%;
`

export const Icon = styled.div`
  color: var(--color-primary);
  font-size: 5rem;
`

export const TextCard = styled.p`
  color: black;
  font-size: 1.5rem;
  margin-top: 5px;
  padding: 0.5rem;
`

export const ImageHightlight = styled.img`
  align-items: center;
  margin-left: 15%;
  width: 700px;
`

/*export const AnimatedLogo = styled.img`
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
`*/
