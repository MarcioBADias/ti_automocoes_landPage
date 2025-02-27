import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0c162d;
  padding: 20px;
  border-radius: 10px;
`

const Table = styled.div`
  display: flex;
  width: 80%;
  border-radius: 10px;
  overflow: hidden;
`

const Column = styled.div`
  flex: 1;
  padding: 20px;
  color: white;
  &.problems {
    background: #c90000;
  }
  &.solutions {
    background: #009c2a;
  }
`

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 18px;

  &::before {
    content: '\u2716';
    color: white;
    font-weight: bold;
    margin-right: 10px;
  }
  &.solution::before {
    content: '\u2714';
  }
`

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

const SystemTable = () => {
  return (
    <Container>
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
    </Container>
  )
}

export default SystemTable
