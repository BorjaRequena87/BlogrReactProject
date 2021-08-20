import React from 'react';
import styled from 'styled-components/macro';
import LogoImg from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdKeyboardArrowUp } from 'react-icons/md';

const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  z-index: 20;
  background: hsl(13, 100%, 72%);
`;

const NavbarWrap = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  z-index: 20;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  width: 100px;
  height: 40px;
  background: url(${LogoImg});
  background-size: 100% 100%;
  cursor: pointer;
`;

const Nav = styled.nav`
  flex: 1;
  position: relative;
  padding-left: 50px;
`;

const NavLink = styled(Link)`
  color: #fff;
  padding: 0 15px;
  font-size: 16px;
  line-height: 80px;
  font-weight: 700;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Button = styled.div`
  width: 110px;
  color: #fff;
  cursor: pointer;
  height: 36px;
  font-size: 16px;
  font-weight: bolder;
  box-sizing: border-box;
  background: hsl(13, 100%, 72%);
  text-align: center;
  line-height: 36px;
  border-radius: 21px;
  &:hover {
    background: hsl(353, 100%, 62%);
    transition: 200ms ease-in;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWrap>
        <Logo />
        <Nav>
          <NavLink to="/">Product<MdKeyboardArrowDown /></NavLink>
          <NavLink to="/">Company<MdKeyboardArrowDown /></NavLink>
          <NavLink to="/">Connect<MdKeyboardArrowUp /></NavLink>
        </Nav>
        <ButtonContainer>
          <Button>Login</Button>
          <Button><span>Sign Up</span></Button>
        </ButtonContainer>
      </NavbarWrap>
    </NavbarContainer>
  )
}

export default Navbar;