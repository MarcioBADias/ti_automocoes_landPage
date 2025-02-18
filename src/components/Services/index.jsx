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
    const fetchData = async () => {
      try{
        const response = await fetch('https://raw.githubusercontent.com/MarcioBADias/data-fake/refs/heads/main/infos.json')
        const data = await response.json()
        dispatch({type: 'set_infos', infos: data})
      } catch (err) {
        console.error('Erro ao carregar a API: ', err)
      }
    }
    fetchData()
  }, [])

  return (
    <Container name="services" id="services">
      <div>
        <h1>Segmentos</h1>
        {status.infos.map((info, index) => (
          <div key={index}>
            <h2 style={{ marginBottom: 10 }}>{info.subtitle}</h2>
            <p>{info.description}</p>
          </div>
        ))}
      </div >
    </Container>
  )
}

export { Services }
