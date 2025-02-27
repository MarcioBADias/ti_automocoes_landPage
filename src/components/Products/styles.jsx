import { Element } from 'react-scroll'
import styled from 'styled-components'

export const Container = styled(Element)`
  align-items: 'center';
  background: var(--color-primary);
  display: 'flex';
  justify-content: 'center';
  padding: 1rem 2rem;
  margin-top: 10%;

  @media (min-width: 840px) {
    padding: 1rem;
    width: 100vw;
  }
`
export const Section = styled.section`
  color: var(--color-primary);
  padding: 50;
`

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
`

export const Table = styled.div`
  display: flex;
  width: 80%;
  border-radius: 10px;
  overflow: hidden;
`

export const Column = styled.div`
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

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
`

export const ListItem = styled.li`
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