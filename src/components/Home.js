import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f8f6f3;
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
  background: #f3f1ee;
  opacity: 0.92;
  /* No hover/focus styles for true minimalism */
`;

function Home() {
  const songs = [
    { id: 1, title: 'Song One' },
    { id: 2, title: 'Song Two' },
    { id: 3, title: 'Song Three' },
    { id: 4, title: 'Song Four' },
    { id: 5, title: 'Song Five' },
  ];
  return (
    <Wrapper>
      <Title>music tomb</Title>
      <Description>
        This is just a place where I put songs I liked. Nothing special. Maybe you'll find something, maybe not. It's quiet here. Sometimes I write a note or some lyrics. It's not really for anyone, honestly. Just a little archive for when I feel like remembering.
      </Description>
      <SongList>
        {songs.map(song => (
          <li key={song.id}>
            <SongLink href={`/song/${song.id}`}>{song.title}</SongLink>
          </li>
        ))}
      </SongList>
    </Wrapper>
  );
}

export default Home; 