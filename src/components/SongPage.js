import React from 'react';
import styled from 'styled-components';
import Player from './Player';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f8f6f3;
  color: #222;
  font-family: 'Inter', sans-serif;
  padding: 2rem 0;
`;

const Lyrics = styled.div`
  max-width: 500px;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.9;
`;

const Note = styled.div`
  max-width: 500px;
  margin-bottom: 2rem;
  font-size: 1rem;
  color: #555;
  background: #f3f1ee;
  border-radius: 8px;
  padding: 1rem;
  min-height: 60px;
`;

const Nav = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1.5rem;
`;

function SongPage() {
  // Placeholder song data
  const song = {
    src: '', // TODO: replace with actual mp3 url
    art: '', // TODO: replace with actual cover art url
    alt: 'Song art',
    lyrics: 'Lyrics go here...\n(You can add the real lyrics later.)',
    note: 'Personal note or poem goes here...'
  };
  return (
    <Wrapper>
      <Player src={song.src} art={song.art} alt={song.alt} />
      <Lyrics>{song.lyrics}</Lyrics>
      <Note>{song.note}</Note>
      <Nav>
        <button>Prev</button>
        <button>Home</button>
        <button>Next</button>
      </Nav>
    </Wrapper>
  );
}

export default SongPage; 