import React from 'react'
import { Container } from './styles'

const Contact = () => {
  return (
    <Container name="contacts" id="contacts">
      <div
        className="prev_about"
        style={{ textAlign: 'center', marginBottom: 20 }}
      >
        <h1 style={{ marginBottom: 10 }}>Clientes</h1>
        <p>Clientes na tela</p>
      </div>
    </Container>
  )
}

export { Contact }
