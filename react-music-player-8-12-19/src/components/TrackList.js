import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

import useMusicPlayer from '../hooks/useMusicPlayer';

function TrackList() {
  const music = useMusicPlayer();
  console.log(music);
  return (
    <>
      {music.trackList.map((track, index) => (
        <div className="box">
          <button className="button" onClick={() => music.playTrack(index)}>
            {music.isPlaying && music.currentTrackIndex === index ? (
              <FontAwesomeIcon icon={faPause} />
            ) : (
              <FontAwesomeIcon icon={faPlay} />
            )}
          </button>
          <div className="song-title">{track.name}</div>
        </div>
      ))}
    </>
  );
}

export default TrackList;
