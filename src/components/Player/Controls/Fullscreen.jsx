import { memo } from 'react';

import Btn from './Btn';
//import { ReactComponent as FullscreenIcon } from 'icons/fullscreen.svg';
//import { ReactComponent as FullscreenExitIcon } from 'icons/fullscreen-exit.svg';

const Fullscreen = ({ isFullscreen, onToggle }) => (
  <Btn
    label={isFullscreen ? 'Fullscreen Off' : 'Fullscreen'}
    onClick={onToggle}
  >
    {!isFullscreen && <img src={require("../../../icons/fullscreen.svg").default} alt="" />}
    {isFullscreen &&  <img src={require("../../../icons/fullscreen-exit.svg").default} alt="" />
}
  </Btn>
);

export default memo(Fullscreen);


