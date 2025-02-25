import React, { useState } from 'react'
import { CgMenuRightAlt, CgCloseR } from 'react-icons/cg'
import {
  ButtonMenu,
  IconMenu,
  ItemMenu,
  LinkItem,
  Logo,
  Menu,
  Nav,
} from './styles'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <Nav>
      <LinkItem to="home" spy={true} smooth={true} offset={-80} duration={800}>
        <Logo src="/Logo_TI.png" alt="Logo Checkspeech" />
      </LinkItem>
      <Menu showMenu={showMenu}>
        <LinkItem
          to="home"
          spy={true}
          smooth={true}
          offset={-80}
          duration={800}
          onClick={() => setShowMenu(!showMenu)}
        >
          <ItemMenu>Início</ItemMenu>
        </LinkItem>
        <LinkItem
          to="products"
          spy={true}
          smooth={true}
          offset={-80}
          duration={800}
          onClick={() => setShowMenu(!showMenu)}
        >
          <ItemMenu>Produtos</ItemMenu>
        </LinkItem>
        <LinkItem
          to="services"
          spy={true}
          smooth={true}
          offset={-80}
          duration={800}
          onClick={() => setShowMenu(!showMenu)}
        >
          <ItemMenu>Serviços</ItemMenu>
        </LinkItem>
        <LinkItem
          to="contacts"
          spy={true}
          smooth={true}
          offset={-80}
          duration={800}
          onClick={() => setShowMenu(!showMenu)}
        >
          <ItemMenu>Contato</ItemMenu>
        </LinkItem>
      </Menu>

      <ButtonMenu onClick={() => setShowMenu(!showMenu)}>
        <IconMenu>
          {showMenu ? (
            <CgCloseR />
          ) : (
            <CgMenuRightAlt>
              <Menu showMenu={showMenu}>
                <ItemMenu>Início</ItemMenu>
                <ItemMenu>Produtos</ItemMenu>
                <ItemMenu>Serviços</ItemMenu>
                <ItemMenu>Contatos</ItemMenu>
              </Menu>
            </CgMenuRightAlt>
          )}
        </IconMenu>
      </ButtonMenu>
    </Nav>
  )
}

export { Header }
