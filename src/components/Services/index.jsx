import React, { useEffect, useReducer } from 'react'
import { Container } from './styles'

const reduce = (state, action) => {
  if (action.type === 'set_infos') {
    return { ...state, infos: action.infos }
  }

  return state
}

const initialState = {
  infos: [],
}

const Services = () => {
  const [status, dispatch] = useReducer( reduce, initialState)
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/MarcioBADias/data-fake/refs/heads/main/infos.json')
    .then(r => r.json())
    .then((data) => dispatch({ type: 'set_infos' }, data))
    .catch(err => console.log(err))
    console.log(status.infos)
  }, [])

  return (
    <Container name="services" id="services">
      <div>
            <h1 style={{ marginBottom: 10 }}>Serviços</h1>
            <img src="/model_machine.png" alt="modelo de maquina" />
          </div >
    </Container>
  )
}

export { Services }
