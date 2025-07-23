import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f8f6f3 !important;
  color: #222;
  font-family: 'Inter', sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
`;

const Description = styled.p`
  max-width: 500px;
  font-size: 1.2rem;
  line-height: 1.7;
  text-align: center;
  opacity: 0.85;
`;

const SongList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2.5rem 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const SongLink = styled.a`
  color: #444;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.5em 1em;
  border-radius: 8px;
  background: #eceae7 !important;
  opacity: 0.92;
  /* No hover/focus/active styles for true minimalism */
`;

function Home() {
  return (
    <Wrapper>
      <Title>music tomb</Title>
      <Description>
        This is just a place where I put songs I liked. Nothing special. Maybe you'll find something, maybe not. It's quiet here. Sometimes I write a note or some lyrics. It's not really for anyone, honestly. Just a little archive for when I feel like remembering.
      </Description>
    </Wrapper>
  );
}

export default Home; 