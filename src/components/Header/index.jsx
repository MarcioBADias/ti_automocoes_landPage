import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { CgMenuRightAlt, CgCloseR } from 'react-icons/cg'
import * as C from './styles'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <C.Nav>
      <Link
        style={{ textDecoration: 'none', display: 'flex' }}
        to="home"
        spy={true}
        smooth={true}
        offset={-80}
        duration={800}
      >
        <C.Logo src="/LogoProv.png" alt="Logo Checkspeech" />
      </Link>
      <C.Menu showMenu={showMenu}>
        <Link
          style={{ textDecoration: 'none', display: 'flex' }}
          to="home"
          spy={true}
          smooth={true}
          offset={-80}
          duration={800}
          onClick={() => setShowMenu(!showMenu)}
        >
          <C.ItemMenu>Início</C.ItemMenu>
        </Link>
        <Link
          style={{ textDecoration: 'none', display: 'flex' }}
          to="about"
          spy={true}
          smooth={true}
          offset={-80}
          duration={800}
          onClick={() => setShowMenu(!showMenu)}
        >
          <C.ItemMenu>Sobre</C.ItemMenu>
        </Link>
        <Link
          style={{ textDecoration: 'none', display: 'flex' }}
          to="solutions"
          spy={true}
          smooth={true}
          offset={-80}
          duration={800}
          onClick={() => setShowMenu(!showMenu)}
        >
          <C.ItemMenu>Soluções</C.ItemMenu>
        </Link>
        <Link
          style={{ textDecoration: 'none', display: 'flex' }}
          to="clients"
          spy={true}
          smooth={true}
          offset={-80}
          duration={800}
          onClick={() => setShowMenu(!showMenu)}
        >
          <C.ItemMenu>Clientes</C.ItemMenu>
        </Link>
        <Link
          style={{ textDecoration: 'none', display: 'flex' }}
          to="prices"
          spy={true}
          smooth={true}
          offset={-80}
          duration={800}
          onClick={() => setShowMenu(!showMenu)}
        >
          <C.ItemMenu>Preços</C.ItemMenu>
        </Link>
        <Link
          style={{ textDecoration: 'none', display: 'flex' }}
          to="contacts"
          spy={true}
          smooth={true}
          offset={-80}
          duration={800}
          onClick={() => setShowMenu(!showMenu)}
        >
          <C.ItemMenu>Contato</C.ItemMenu>
        </Link>
      </C.Menu>

      <C.ButtonMenu onClick={() => setShowMenu(!showMenu)}>
        <C.IconMenu>
          {showMenu ? (
            <CgCloseR />
          ) : (
            <CgMenuRightAlt>
              <C.Menu showMenu={showMenu}>
                <C.ItemMenu>Início</C.ItemMenu>
                <C.ItemMenu>Soluções</C.ItemMenu>
                <C.ItemMenu>Preços</C.ItemMenu>
                <C.ItemMenu>Contatos</C.ItemMenu>
              </C.Menu>
            </CgMenuRightAlt>
          )}
        </C.IconMenu>
      </C.ButtonMenu>
    </C.Nav>
  )
}

export { Header }
