import { memo } from 'react';

import Btn from './Btn';
//import { ReactComponent as TrackSkipIcon } from 'icons/track-skip.svg';

const Skip = ({ onSkip }) => {
  return (
    <Btn label="+ 10 seconds" onClick={onSkip}>
    <img src={require("../../../icons/track-skip.svg").default} alt="" />

    </Btn>
  );
};

export default memo(Skip);


