import React from 'react';
import styled from 'styled-components';
import RandomButton from './RandomButton';
import songs from '../data/songs';

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

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  letter-spacing: 0.04em;
`;

const SongList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
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
  background: #eceae7;
  opacity: 0.92;
`;

function SongsLibrary() {
  return (
    <Wrapper>
      <Title>all songs</Title>
      <SongList>
        {songs.map(song => (
          <li key={song.id}>
            <SongLink href={`/song/${song.id}`}>{song.title}</SongLink>
          </li>
        ))}
      </SongList>
      <RandomButton songIds={songs.map(song => song.id)} />
    </Wrapper>
  );
}

export default SongsLibrary; 