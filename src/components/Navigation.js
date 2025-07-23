import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100px;
  background: #f8f6f3 !important;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem 0 2.5rem 1.2rem;
  box-shadow: 1px 0 8px rgba(0,0,0,0.02);
  z-index: 100;
  @media (max-width: 600px) {
    flex-direction: row;
    width: 100vw;
    height: 60px;
    top: 0;
    left: 0;
    box-shadow: 0 1px 8px rgba(0,0,0,0.02);
    padding: 0 1.2rem;
    align-items: center;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  width: 100%;
  background: transparent !important;
  @media (max-width: 600px) {
    flex-direction: row;
    gap: 1.5rem;
    align-items: center;
    height: 100%;
    width: auto;
  }
`;

const NavItem = styled.li`
  width: 100%;
  background: transparent !important;
`;

const NavButton = styled(NavLink)`
  display: block;
  color: #888;
  text-decoration: none;
  font-size: 1.15rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  padding: 0.5em 1.2em;
  border-radius: 10px;
  margin-left: 0.1em;
  transition: color 0.18s, font-weight 0.18s;
  background: transparent !important;
  outline: none;
  &.active {
    color: #222;
    font-weight: 600;
    background: transparent !important;
    box-shadow: none;
  }
  &:hover:not(.active), &:focus-visible:not(.active) {
    color: #222;
    font-weight: 600;
    background: transparent !important;
  }
`;

function Navigation() {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavButton to="/">home</NavButton>
        </NavItem>
        <NavItem>
          <NavButton to="/songs">songs</NavButton>
        </NavItem>
        <NavItem>
          <NavButton to="/about">about</NavButton>
        </NavItem>
        <NavItem>
          <NavButton to="/blog">blog</NavButton>
        </NavItem>
        <NavItem>
          <NavButton to="/ask">ask</NavButton>
        </NavItem>
      </NavList>
    </Nav>
  );
}

export default Navigation; 