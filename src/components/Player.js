import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const Art = styled.img`
  width: 320px;
  height: 320px;
  object-fit: cover;
  border-radius: 18px;
  box-shadow: 0 2px 24px rgba(0,0,0,0.06);
  background: #e0dedb;
`;

const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.2rem;
`;

const Title = styled.div`
  font-size: 1.35rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  margin-bottom: 0.3rem;
  color: #222;
`;

const Artist = styled.div`
  font-size: 1.05rem;
  color: #888;
  font-weight: 400;
`;

const Controls = styled.div`
  margin-bottom: 2rem;
`;

const Seek = styled.input`
  width: 220px;
  accent-color: #bdb8b1;
`;

function Player({ src, art, alt, title, artist }) {
  const audioRef = useRef();
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    setPlaying(false);
    setCurrent(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [src]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const onTimeUpdate = () => {
    setCurrent(audioRef.current.currentTime);
  };

  const onLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const onSeek = (e) => {
    const time = Number(e.target.value);
    audioRef.current.currentTime = time;
    setCurrent(time);
  };

  return (
    <PlayerWrapper>
      {art && <Art src={art} alt={alt || 'Song art'} />}
      <SongInfo>
        <Title>{title}</Title>
        <Artist>{artist}</Artist>
      </SongInfo>
      <Controls>
        <button onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
          {playing ? '❚❚' : '►'}
        </button>
        <Seek
          type="range"
          min={0}
          max={duration || 0}
          value={current}
          onChange={onSeek}
          step="0.1"
        />
        <span style={{ fontSize: '0.95rem', color: '#888', minWidth: 48, textAlign: 'right' }}>
          {formatTime(current)} / {formatTime(duration)}
        </span>
      </Controls>
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={() => setPlaying(false)}
        style={{ display: 'none' }}
      />
    </PlayerWrapper>
  );
}

function formatTime(sec) {
  if (!sec || isNaN(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

export default Player; 