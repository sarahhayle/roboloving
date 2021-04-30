import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoLink = styled(Link)`
  font-family: 'SEGA LOGO FONT';
  font-weight: 200;
  color: #0ccac4;
  margin: 2.5rem;
  text-decoration: none;
`

const NavItem = styled(Link)`
  color: #0ccac4;
  font-size: 1.35rem;
  font-family: 'Courier', sans-serif;
  text-decoration: none;
  margin: 0 2.5rem;
`

const NavContainer = styled.nav` 
  font-size: 45px;
  position: sticky;
  top: 0;
  z-index: 999;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  vertical-align: middle;
`;

const NavBar = () => {
  return (
    <NavContainer>
      <LogoLink to='/'>RoboLoving</LogoLink>
      <NavItem to="/matches">MATCHES</NavItem>
    </NavContainer>
  )
}

export default NavBar;
