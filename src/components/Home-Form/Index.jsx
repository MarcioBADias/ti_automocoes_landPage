import React from 'react'
import { Card, CardContainer, Container, Icon, TextCard } from './styles'
import { Contact } from '../../Form'
import { BsPersonVcardFill } from 'react-icons/bs'

const HomeForm = () => {
  return (
    <section>
      <Container
        name="home"
        id="home"
        className="prev_about"
        style={{ textAlign: 'center', marginBottom: 20 }}
      >
        <h2>
          O melhor sistema para{' '}
          <span style={{ color: 'var(--color-secondary)' }}>
            solucionar erros e facilitar pedidos nos pedidos
          </span>{' '}
          do seu bar, casa noturna, restaurante ou beach club.
        </h2>

        <CardContainer>
          <Card>
            <Icon>
              <BsPersonVcardFill />
            </Icon>
            <TextCard>Comanda identificada por CPF</TextCard>
          </Card>

          <Card>
            <Icon>
              <BsPersonVcardFill />
            </Icon>
            <TextCard>Comanda identificada por CPF</TextCard>
          </Card>

          <Card>
            <Icon>
              <BsPersonVcardFill />
            </Icon>
            <TextCard>Comanda identificada por CPF</TextCard>
          </Card>
        </CardContainer>

        <Contact />
      </Container>
      <Container>
        <img
          style={{ width: 400 }}
          src="/maquininha.png"
          alt="Arte da Logo"
          className="logo_art"
        />
      </Container>
    </section>
  )
}

export { HomeForm }
