import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPause,
  faPlay,
  faStepBackward,
  faStepForward
} from '@fortawesome/free-solid-svg-icons';

import useMusicPlayer from '../hooks/useMusicPlayer';

function PlayerControls() {
  const music = useMusicPlayer();
  return (
    <>
      <div className="box controls has-background-grey-dark">
        <div className="current-track has-text-light">
          <p>{music.currentTrackName}</p>
        </div>
        <div>
          <button
            className="button has-text-light has-background-grey-dark"
            onClick={music.playPreviousTrack}
          >
            <FontAwesomeIcon icon={faStepBackward} />
          </button>
          <button
            className="button has-text-light has-background-grey-dark"
            onClick={music.togglePlay}
          >
            {music.isPlaying ? (
              <FontAwesomeIcon icon={faPause} />
            ) : (
              <FontAwesomeIcon icon={faPlay} />
            )}
          </button>
          <button
            className="button has-text-light has-background-grey-dark"
            onClick={music.playNextTrack}
          >
            <FontAwesomeIcon icon={faStepForward} />
          </button>
        </div>
      </div>
    </>
  );
}

export default PlayerControls;
