import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

const SongGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2.2rem;
  width: 100%;
  max-width: 900px;
  margin-bottom: 2.5rem;
`;

const SongCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  background: #eceae7;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.03);
  padding: 1.2rem 1rem 1.4rem 1rem;
  transition: box-shadow 0.18s, background 0.18s;
  color: #222;
  min-height: 320px;
  &:hover, &:focus {
    background: #e0dedb;
    box-shadow: 0 4px 24px rgba(0,0,0,0.06);
  }
`;

const Cover = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1.1rem;
  box-shadow: 0 1px 8px rgba(0,0,0,0.04);
`;

const SongTitle = styled.div`
  font-size: 1.08rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0.3rem;
`;

const SongArtist = styled.div`
  font-size: 0.98rem;
  color: #888;
  text-align: center;
`;

function SongsLibrary() {
  return (
    <Wrapper>
      <Title>all songs</Title>
      <SongGrid>
        {songs.map(song => (
          <SongCard as={Link} to={`/song/${song.id}`} key={song.id}>
            <Cover src={song.art} alt={song.title} />
            <SongTitle>{song.title}</SongTitle>
            <SongArtist>{song.artist}</SongArtist>
          </SongCard>
        ))}
      </SongGrid>
      <RandomButton songIds={songs.map(song => song.id)} />
    </Wrapper>
  );
}

export default SongsLibrary; 