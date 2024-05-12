import { memo } from 'react';

const Progress = ({
  bufferProgress,
  currentProgress,
  videoDuration,
  seekProgress,
  seekTooltipPosition,
  seekTooltip,
  onHover,
  onSeek,
}) => {
  return (
    <div className="vp-progress">
      <div className="vp-progress__range">
        <div className="vp-progress__range--background" />
        <div
          className="vp-progress__range--buffer"
          style={{ width: bufferProgress + '%' }}
        />
        <div
          className="vp-progress__range--current"
          style={{ width: currentProgress + '%' }}
        >
          <div className="vp-progress__range--current__thumb" />
        </div>
        <input
          className="vp-progress__range--seek"
          type="range"
          step="any"
          max={videoDuration}
          value={seekProgress}
          onMouseMove={onHover}
          onChange={onSeek}
        />
      </div>

      <span
        className="vp-progress__tooltip"
        style={{ left: seekTooltipPosition }}
      >
        {seekTooltip}
      </span>
    </div>
  );
};

export default memo(Progress);


