import React from 'react'
import { Container, Section, TableContainer } from './styles'
import SystemTable from '../TableComponenttest'

const Products = () => {
  const problems = [
    'Garçons levando muito tempo para atender',
    'Pedidos enviados com erros para a cozinha',
    'Confusão na hora de fechar comanda em grupo',
    'Clientes que saem sem pagar',
    'Quebras de caixa no fim do dia',
  ]
  
  const solutions = [
    'Mais rapidez com PDV móvel e Totens',
    'Pedidos vinculados à mesa e impressão remota na cozinha',
    'Comanda individual por cliente',
    'Possibilidade de cobrança pelo Whatsapp',
    'Fechamento em 15min com adquirência integrada',
  ]

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
        <TableContainer>
      <Table>
        <Column className="problems">
          <Title>Problemas na Operação</Title>
          <List>
            {problems.map((problem, index) => (
              <ListItem key={index}>{problem}</ListItem>
            ))}
          </List>
        </Column>
        <Column className="solutions">
          <Title>Soluções com o Sistema da Zig</Title>
          <List>
            {solutions.map((solution, index) => (
              <ListItem key={index} className="solution">
                {solution}
              </ListItem>
            ))}
          </List>
        </Column>
      </Table>
    </TableContainer>
      </Section>
    </Container>
  )
}

export { Products }
