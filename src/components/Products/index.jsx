import React from 'react'
import { Container, Section } from './styles'
import SystemTable from '../TableComponenttest'

const Products = () => {
  return (
    <Container name="products" id="products">
      <Section>
        <div>
          <img
            src="/PDV_Legal_Symbol.png"
            alt="PDV Legal"
            style={{ width: 500, marginTop: -90, marginRight: -50 }}
          />
        </div>
      </Section>
      <Section>
        <div>
          <SystemTable />
        </div>
      </Section>
    </Container>
  )
}

export { Products }
