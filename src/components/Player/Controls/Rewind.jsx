import { memo } from 'react';

import Btn from './Btn';
//import { ReactComponent as TrackRewindIcon } from 'icons/track-rewind.svg';

const Rewind = ({ onRewind }) => {
  return (
    <Btn label="- 10 seconds" onClick={onRewind}>
    <img src={require("../../../icons/track-rewind.svg").default} alt="" />

    </Btn>
  );
};

export default memo(Rewind);


