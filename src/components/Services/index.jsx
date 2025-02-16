import React from 'react'
import { Container } from './styles'

const Services = () => {
  return (
    <Container name="services" id="services">
      <div
        className="prev_about"
        style={{ textAlign: 'center', marginBottom: 20 }}
      >
        <h1 style={{ marginBottom: 10 }}>Nossos serviços</h1>
        <img src="/model_machine.png" alt="modelo de maquina" />
      </div>
    </Container>
  )
}

export { Services }
