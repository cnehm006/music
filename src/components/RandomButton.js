import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Button = styled.button`
  position: fixed;
  left: 24px;
  bottom: 32px;
  z-index: 200;
  color: #888;
  background: #f8f6f3;
  border: none;
  font-size: 1.15rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  padding: 0.5em 1.2em;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  transition: color 0.18s, font-weight 0.18s, box-shadow 0.18s;
  cursor: pointer;
  outline: none;
  &:hover, &:focus {
    color: #222;
    font-weight: 600;
    box-shadow: 0 4px 16px rgba(0,0,0,0.07);
  }
  @media (max-width: 600px) {
    left: 16px;
    bottom: 16px;
    font-size: 1rem;
    padding: 0.5em 1em;
  }
`;

function RandomButton({ songCount = 5 }) {
  const navigate = useNavigate();
  const goRandom = () => {
    const randomId = Math.floor(Math.random() * songCount) + 1;
    navigate(`/song/${randomId}`);
  };
  return <Button onClick={goRandom}>random</Button>;
}

export default RandomButton; 