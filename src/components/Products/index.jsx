import React from 'react'
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { MdCancel } from "react-icons/md";
import { Column, Container, List, ListItem, Section, Table, TableContainer, Title, TitleColumn } from './styles'

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
        <div style={{width: '60%'}}>
          <h1 style={{color: '#ffffff', width: '80%'}}>Descubra como o PDV Legal vai aumentar a eficiência e eliminar os erros no seu bar, balada ou restaurante.</h1>
        </div>
        <div>
          <img
            src="/PDV_Legal_Symbol.png"
            alt="PDV Legal"
            style={{ width: 700, marginTop: -18, marginRight: -50 }}
          />
        </div>
      </Section>
      <Section>
        <TableContainer>
      <Table>
        <Column>
          <TitleColumn className="problems">
            <Title>Problemas na Operação</Title>
          </TitleColumn>
          <List>
            {problems.map((problem, index) => (
              <ListItem key={index}>
                <MdCancel />{problem}
              </ListItem>
            ))}
          </List>
        </Column>
        <Column>
          <TitleColumn className="solutions">
            <Title>Soluções com o Sistema PDV Legal</Title>
          </TitleColumn>
          <List>
            {solutions.map((solution, index) => (
              <ListItem key={index} className="solution">
                <TbRosetteDiscountCheckFilled /> {solution}
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
