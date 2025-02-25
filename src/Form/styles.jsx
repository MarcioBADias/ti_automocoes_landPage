import { Element } from 'react-scroll'
import { Field } from 'formik'
import styled from 'styled-components'

export const Section = styled.section`
  min-height: 100vh;
  background: var(--cor-dark-primary);
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  /* ::before{
        box-shadow: 5px 0px 10px 5px var(--cor-green-primary);
        position: absolute;
        content: '';
        height: 60vh;
        width: 28vw;
        top: 20%;
        left: 0;
        background: var(--cor-green-primary);

        @media (max-width: 840px) {
            display: none;
        }
    }

    ::after{
        box-shadow: -5px 0px 10px 5px var(--cor-green-primary);
        position: absolute;
        content: '';
        height: 60vh;
        width: 28vw;
        top: 20%;
        right: 0;
        background: var(--cor-green-secondary);

        @media (max-width: 840px) {
            display: none;
        }
    } */
`

export const Container = styled.div`
  align-items: center;
  background: var(--cor-dark-primary);
  border: 5px solid var(--cor-green-primary);
  border-radius: 15px;
  box-shadow: 0px 0px 10px 10px var(--cor-green-secondary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0.5rem;
  width: 40vw;

  @media (max-width: 840px) {
    width: 80vw;
  }
`

export const Title = styled.h1`
  font-size: 2rem;
  padding-bottom: 1rem;
`

export const Input = styled(Field)`
  background: var(--cor-dark-secontary);
  border: 1px var(--cor-green-primary) solid;
  color: var(--cor-light-primary);
  border-radius: 5px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  width: 82%;

  ::placeholder {
    color: var(--cor-light-primary);
  }
`

export const Select = styled.select`
  background: var(--cor-dark-secontary);
  border: 1px var(--cor-green-primary) solid;
  color: var(--cor-light-primary);
  border-radius: 5px;
  padding: 0.4rem 6.5rem;
  margin-bottom: 1rem;

  ::placeholder {
    color: var(--cor-light-primary);
  }

  @media (max-width: 840px) {
    padding: 0.4rem 4rem;
  }
`

export const Option = styled.option`
  background: var(--cor-dark-secontary);
  border: 1px var(--cor-green-primary) solid;
  color: var(--cor-dark-primary);
  border-radius: 5px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  width: 80%;

  ::placeholder {
    color: var(--cor-light-primary);
  }
`

export const InputTextArea = styled.textarea`
  background: var(--cor-dark-secontary);
  border: 1px var(--cor-green-primary) solid;
  border-radius: 5px;
  color: var(--cor-light-primary);
  font-size: 1rem;
  padding: 0.5rem;
  height: 200px;
  width: 80%;

  ::placeholder {
    color: var(--cor-light-primary);
  }
`

export const ErrorMessage = styled.span`
  color: red;
  margin-top: -1rem;
  padding: 0.5rem;
`

export const Button = styled.button`
  background: none;
  border: 5px solid var(--cor-green-primary);
  border-radius: 25px;
  box-shadow: 0px 0px 10px 5px var(--cor-green-secondary);
  color: var(--cor-light-primary);
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
  padding: 0.5rem 2rem;

  :hover {
    background: var(--cor-green-primary);
    font-size: 1.3rem;
  }

  @media (max-width: 840px) {
    margin-bottom: 2rem;
  }
`

/*export const Container = styled(Element)`
  align-items: 'center';
  display: 'flex';
  justify-content: 'center';
  padding: 1rem 2rem;
  margin-top: 10%;

  @media (min-width: 840px) {
    padding: 1rem;
    width: 50%;
  }
`*/
