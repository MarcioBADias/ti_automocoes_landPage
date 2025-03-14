import React, { useEffect, useReducer } from 'react'
import { BoxInfo, BoxItem, Container } from './styles'

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
        <h1 style={{ textAlign: 'center' }}>Segmentos</h1>
        <BoxInfo>
        {status.infos.map((info, index) => (
          <BoxItem key={index}>
            <div>
              <h2 style={{ marginBottom: 10 }}>{info.subtitle}</h2>
              <p>{info.description}</p>
            </div>
          </BoxItem>
        ))}
          
        </BoxInfo>
      </div >
    </Container>
  )
}

export { Services }
