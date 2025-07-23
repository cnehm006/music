import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const Art = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 14px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.04);
  background: #e0dedb;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const Button = styled.button`
  background: #eceae7;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: #444;
  box-shadow: 0 1px 4px rgba(0,0,0,0.03);
  transition: background 0.2s, box-shadow 0.2s, color 0.2s;
}

  &:hover, &:focus {
    color: #111;
    outline: none;
  }
`;

const Seek = styled.input`
  width: 180px;
  accent-color: #bdb8b1;
`;

function Player({ src, art, alt }) {
  const audioRef = useRef();
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

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
      <Controls>
        <Button onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
          {playing ? '❚❚' : '►'}
        </Button>
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