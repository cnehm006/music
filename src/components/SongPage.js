import React, { useState } from 'react';
import styled from 'styled-components';
import Player from './Player';
import { useNavigate, useParams } from 'react-router-dom';
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

const Lyrics = styled.div`
  max-width: 500px;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.9;
  white-space: pre-line;
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

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #888;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 0.5rem;
  padding: 0;
  &:hover, &:focus {
    color: #222;
    text-decoration: underline;
  }
`;

function CollapsibleLyrics({ lyrics, initialLines = 4 }) {
  const [expanded, setExpanded] = useState(false);
  const lines = lyrics.split('\n');
  const showToggle = lines.length > initialLines;
  return (
    <Lyrics>
      {expanded ? lyrics : lines.slice(0, initialLines).join('\n') + (showToggle ? '\n...' : '')}
      {showToggle && (
        <ToggleButton onClick={() => setExpanded(e => !e)}>
          {expanded ? 'Show less' : 'Show more'}
        </ToggleButton>
      )}
    </Lyrics>
  );
}

function SongPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const song = songs.find(s => s.id === id);
  // Placeholder min/max song IDs (update as you add more songs)
  const minId = 0;
  const maxId = songs.length - 1;
  const currentIndex = songs.findIndex(s => s.id === id);
  const goPrev = () => {
    if (currentIndex > 0) navigate(`/song/${songs[currentIndex - 1].id}`);
  };
  const goNext = () => {
    if (currentIndex < maxId) navigate(`/song/${songs[currentIndex + 1].id}`);
  };
  const goHome = () => navigate('/');
  if (!song) return <Wrapper>Song not found.</Wrapper>;
  return (
    <Wrapper>
      <Player src={song.src} art={song.art} alt={song.title} />
      <CollapsibleLyrics lyrics={song.lyrics} initialLines={4} />
      <Note>{song.note}</Note>
      <Nav>
        <button onClick={goPrev} disabled={currentIndex <= minId}>Prev</button>
        <button onClick={goHome}>Home</button>
        <button onClick={goNext} disabled={currentIndex >= maxId}>Next</button>
      </Nav>
      <RandomButton songCount={songs.length} />
    </Wrapper>
  );
}

export default SongPage; 