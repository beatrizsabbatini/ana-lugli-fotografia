import styled from "styled-components";

export const Container = styled.nav`
  background-color: black;
  opacity: 0.7;
  width: 100vw;
  display: flex;
  flex-direction: row;
  list-style:none;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px 0 100px;
  position: fixed;
  top: 0;
  z-index: 2;
`;

export const NavLink = styled.a`
  color: white;
  text-transform: uppercase;
  cursor: pointer;
`;

export const NavItem = styled.li`
  padding: 20px;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const AcessPortalButton = styled.div`
  cursor: pointer;
  border-width: 2px;
  border-style: solid;
  border-color: white;
  padding: 8px;
  border-radius: 100px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  transition: 1s ease;

  :hover{
    background-color: white;
  }
`

export const PortalLink = styled.a`
color: white;
text-transform: uppercase;

transition: 1s ease;

:hover{
  color: black;
}
`
