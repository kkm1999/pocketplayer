import { memo } from 'react';

const Time = ({ time }) => (
  <time className="vp-time" dateTime={time}>
    {time}
  </time>
);

export default memo(Time);


