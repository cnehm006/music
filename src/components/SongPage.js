import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Player from './Player';
import { useNavigate, useParams } from 'react-router-dom';
import RandomButton from './RandomButton';
import songs from '../data/songs';
import { motion, AnimatePresence } from 'framer-motion';

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

const LyricsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Lyrics = styled.div`
  max-width: 500px;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.9;
  white-space: pre-line;
  text-align: center;
`;

const NoteWrapper = styled.div`
  max-width: 500px;
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NoteBlur = styled(motion.span)`
  display: inline-block;
  filter: blur(18px) brightness(2) contrast(1.1);
  cursor: pointer;
  user-select: none;
  transition: filter 0.3s;
`;

const Note = styled.div`
  background: #f3f1ee;
  border-radius: 8px;
  padding: 1rem;
  min-height: 60px;
  color: #555;
  width: 100%;
  transition: filter 0.3s;
  text-align: center;
  position: relative;
  white-space: pre-line;
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
  display: block;
  margin-left: auto;
  margin-right: auto;
  &:hover, &:focus {
    color: #222;
    text-decoration: underline;
  }
`;

const TwinkleOverlay = styled(motion.div)`
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
  background: linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.96) 60%, rgba(255,255,255,0.93) 100%);
  cursor: pointer;
  overflow: hidden;
`;

function CollapsibleLyrics({ lyrics, initialLines = 4 }) {
  const [expanded, setExpanded] = useState(false);
  const lines = lyrics.split('\n');
  const showToggle = lines.length > initialLines;
  const isItalic = lyrics.trim().toLowerCase() === 'no lyrics.';
  return (
    <LyricsWrapper>
      <Lyrics style={isItalic ? { fontStyle: 'italic', color: '#888' } : {}}>
        {expanded
          ? <>{lyrics}<br /><ToggleButton onClick={() => setExpanded(e => !e)}>Show less</ToggleButton></>
          : <>{lines.slice(0, initialLines).join('\n')}{showToggle ? '\n...' : ''}<br />{showToggle && <ToggleButton onClick={() => setExpanded(e => !e)}>Show more</ToggleButton>}</>}
      </Lyrics>
    </LyricsWrapper>
  );
}

function Sparkles({ count = 18 }) {
  // Generate random sparkles
  return Array.from({ length: count }).map((_, i) => {
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const size = 8 + Math.random() * 10;
    const opacity = 0.3 + Math.random() * 0.5;
    return (
      <motion.div
        key={i}
        style={{
          position: 'absolute',
          left: `${left}%`,
          top: `${top}%`,
          width: size,
          height: size,
          borderRadius: '50%',
          background: 'white',
          opacity,
          filter: 'blur(1.5px)',
        }}
        animate={{ opacity: [opacity, 0] }}
        transition={{ duration: 1.8, delay: 0.2 + Math.random() * 0.7 }}
      />
    );
  });
}

function NoteReveal({ note }) {
  const { id } = useParams();
  const [unlocked, setUnlocked] = useState(false);
  const [hideOverlay, setHideOverlay] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const lines = note.split('\n');
  const initialLines = id === 'iexist' ? 1 : 4;
  const showToggle = id !== 'iexist' && lines.length > initialLines;

  useEffect(() => {
    setUnlocked(false);
    setHideOverlay(false);
    setExpanded(false);
  }, [id]);

  return (
    <NoteWrapper>
      <Note style={{ position: 'relative' }}>
        <AnimatePresence>
          {!unlocked && !hideOverlay && (
            <TwinkleOverlay
              key="twinkle"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 1.8, ease: [0.4, 0, 0.2, 1] } }}
              transition={{ duration: 0.2 }}
              onClick={() => { setUnlocked(true); setTimeout(() => setHideOverlay(true), 1800); }}
            >
              <Sparkles />
              <span style={{ opacity: 0.7, fontWeight: 500, fontSize: '1.1rem', letterSpacing: '0.03em', position: 'relative', zIndex: 3 }}>Click to reveal</span>
            </TwinkleOverlay>
          )}
        </AnimatePresence>
        {unlocked || hideOverlay ? (
          <>
            {id === 'iexist' && !expanded
              ? <><span style={{ position: 'relative', zIndex: 1 }}>{lines[0]}</span></>
              : showToggle && !expanded
                ? <><span style={{ position: 'relative', zIndex: 1 }}>{lines.slice(0, initialLines).join('\n')}{'\n...'}</span><br /><ToggleButton onClick={() => setExpanded(true)}>Show more</ToggleButton></>
                : <><span style={{ position: 'relative', zIndex: 1 }}>{note}</span>{showToggle && <><br /><ToggleButton onClick={() => setExpanded(false)}>Show less</ToggleButton></>}</>
            }
          </>
        ) : null}
      </Note>
    </NoteWrapper>
  );
}

function SongPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const song = songs.find(s => s.id === id);
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
      <Player src={song.src} art={song.art} alt={song.title} title={song.title} artist={song.artist} />
      <CollapsibleLyrics lyrics={song.lyrics} initialLines={4} />
      <NoteReveal note={song.note} />
      <Nav>
        <button onClick={goPrev} disabled={currentIndex <= minId}>Prev</button>
        <button onClick={goNext} disabled={currentIndex >= maxId}>Next</button>
      </Nav>
      <RandomButton songIds={songs.map(s => s.id)} />
    </Wrapper>
  );
}

export default SongPage; 