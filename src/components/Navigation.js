import React from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';

const Nav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 80px;
  background: #f8f6f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  box-shadow: 1px 0 8px rgba(0,0,0,0.02);
  z-index: 100;
  @media (max-width: 600px) {
    flex-direction: row;
    width: 100vw;
    height: 60px;
    top: 0;
    left: 0;
    box-shadow: 0 1px 8px rgba(0,0,0,0.02);
    padding: 0 1rem;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  @media (max-width: 600px) {
    flex-direction: row;
    gap: 1.5rem;
    align-items: center;
    height: 100%;
  }
`;

const NavItem = styled.li``;

const NavButton = styled(NavLink)`
  color: #888;
  text-decoration: none;
  font-size: 1.05rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  padding: 0.3em 0.7em;
  border-radius: 7px;
  transition: background 0.18s, color 0.18s, box-shadow 0.18s;
  background: transparent;
  outline: none;
  &.active {
    color: #222;
    background: #eceae7;
    box-shadow: 0 1px 4px rgba(0,0,0,0.03);
  }
  &:hover, &:focus {
    color: #222;
    background: #e0dedb;
  }
`;

const RandomButton = styled.button`
  color: #888;
  background: transparent;
  border: none;
  font-size: 1.05rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  padding: 0.3em 0.7em;
  border-radius: 7px;
  transition: background 0.18s, color 0.18s, box-shadow 0.18s;
  cursor: pointer;
  outline: none;
  &:hover, &:focus {
    color: #222;
    background: #e0dedb;
  }
`;

function Navigation({ songCount = 5 }) {
  const navigate = useNavigate();
  const goRandom = () => {
    const randomId = Math.floor(Math.random() * songCount) + 1;
    navigate(`/song/${randomId}`);
  };
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavButton to="/">home</NavButton>
        </NavItem>
        <NavItem>
          <RandomButton onClick={goRandom}>random</RandomButton>
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