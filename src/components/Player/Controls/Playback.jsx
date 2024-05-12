import { memo } from 'react';

import Btn from './Btn';
//import { ReactComponent as PlayIcon } from 'icons/play.svg';
//import { ReactComponent as PauseIcon } from 'icons/pause.svg';

const Playback = ({ isPlaying, onToggle }) => (
  <Btn label={isPlaying ? 'Pause' : 'Play'} onClick={onToggle}>
    {isPlaying ? <img src={require("../../../icons/pause.svg").default} alt="" />
 :  <img src={require("../../../icons/play.svg").default} alt="" />}
  </Btn>
);

export default memo(Playback);


