import React from 'react';

import { useHistory } from "react-router-dom";

import { Container, NavLink, NavItem, Links, AcessPortalButton, PortalLink } from "./styles";
import {ReactComponent as Logo} from '../../assets/logo.svg';
import {ReactComponent as InstagramLogo} from '../../assets/instagram.svg';

export default function NavigationBar() {
  const history = useHistory();
  
  const navButtons = [
    {
      id: 1,
      title: 'Início',
      route: 'banner'
    },
    {
      id: 2,
      title: 'Portfólio',
      route: 'portfolio'
    },
    {
      id: 3,
      title: 'Quem sou',
      route: 'about'
    },
    {
      id: 4,
      title: 'Contato',
      route: 'banner'
    },
  ]

  return (
    <Container>
      <Logo height={38} />
      <Links>
      {navButtons.map(item => (
        <NavItem>
         <NavLink>{item.title}</NavLink>
        </NavItem>
      )
      )}
      <AcessPortalButton onClick={() => history.push("/ana-lugli-fotografia/Portal")}>
        <PortalLink>Acessar Portal</PortalLink>
      </AcessPortalButton>
      <InstagramLogo height={18} />
      </Links>
  </Container>
  )
}
