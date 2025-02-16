import React from 'react'
import { Container, Section } from './styles'

const Products = () => {
  return (
    <Container name="products" id="products">
      <Section>
        <div
          className="prev_about"
          style={{
            color: 'var(--color-primary)',
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          <h1 style={{ marginBottom: 10 }}>Nossos Produtos</h1>
        </div>
        <div>
          <img
            src="/PDV_Legal_Symbol.png"
            alt="PDV Legal"
            style={{ width: 500, marginTop: -90, marginRight: -50 }}
          />
        </div>
      </Section>
    </Container>
  )
}

export { Products }
