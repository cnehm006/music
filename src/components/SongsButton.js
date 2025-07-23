import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Button = styled.button`
  position: fixed;
  left: 24px;
  bottom: 88px;
  z-index: 200;
  color: #222;
  background: transparent !important;
  border: none;
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 0.5em 1.2em;
  border-radius: 14px;
  box-shadow: none !important;
  transition: color 0.18s, font-weight 0.18s;
  cursor: pointer;
  outline: none;
  &:hover, &:focus {
    color: #111;
    font-weight: 700;
    background: transparent !important;
    box-shadow: none !important;
  }
  @media (max-width: 600px) {
    left: 16px;
    bottom: 72px;
    font-size: 1rem;
    padding: 0.5em 1em;
  }
`;

function SongsButton() {
  const navigate = useNavigate();
  return <Button onClick={() => navigate('/songs')}>songs</Button>;
}

export default SongsButton; 