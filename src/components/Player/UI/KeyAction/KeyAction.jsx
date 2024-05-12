import { forwardRef, memo, useRef, useImperativeHandle } from 'react';
import { CSSTransition } from 'react-transition-group';
import './KeyAction.css';


{/*
import { ReactComponent as VolumeHighIcon } from 'icons/volume-high.svg';
import { ReactComponent as VolumeMiddleIcon } from 'icons/volume-middle.svg';
import { ReactComponent as VolumeLowIcon } from 'icons/volume-low.svg';
import { ReactComponent as VolumeMuteIcon } from 'icons/volume-mute.svg';
import { ReactComponent as TrackRewindIcon } from 'icons/track-rewind.svg';
import { ReactComponent as TrackSkipIcon } from 'icons/track-skip.svg';
*/}

const KeyAction = forwardRef((props, ref) => {
  const { on, volume } = props;
  const rewindRef = useRef(null);
  const skipRef = useRef(null);

  useImperativeHandle(ref, () => ({
    get rewind() {
      return rewindRef.current;
    },
    get skip() {
      return skipRef.current;
    },
  }));

  return (
    <div className="vp-key-action">
      <CSSTransition
        in={on}
        classNames="vp-key-volume"
        timeout={300}
        mountOnEnter
        unmountOnExit
      >
        <div className="vp-key-action__volume">
          <div className="vp-key-action__volume__container">
            <div className="vp-key-action__volume__icon">
              {volume > 0.7 &&<img src={require("../../../../icons/volume-high.svg").default} alt="" />}
              {volume <= 0.7 && volume > 0.3 &&<img src={require("../../../../icons/volume-middle.svg").default} alt="" />}
              {volume <= 0.3 && volume > 0 && <img src={require("../../../../icons/volume-low.svg").default} alt="" />}
              {volume === 0 &&<img src={require("../../../../icons/volume-mute.svg").default} alt="" />
}
            </div>
            <div className="vp-key-action__volume__range">
              <div className="vp-key-action__volume__range--background" />
              <div
                className="vp-key-action__volume__range--current"
                style={{ width: `${volume * 100}%` }}
              />
            </div>
          </div>
        </div>
      </CSSTransition>

      <div className="vp-key-action__progress rewind" ref={rewindRef}>
        <div className="vp-key-action__progress__container">
        <img src={require("../../../../icons/track-rewind.svg").default} alt="" />

          <span>- 10 seconds</span>
        </div>
      </div>
      <div className="vp-key-action__progress skip" ref={skipRef}>
        <div className="vp-key-action__progress__container">
        <img src={require("../../../../icons/track-skip.svg").default} alt="" />

          <span>+ 10 seconds</span>
        </div>
      </div>
    </div>
  );
});

export default memo(KeyAction);


