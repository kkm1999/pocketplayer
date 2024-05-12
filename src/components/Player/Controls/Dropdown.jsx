
import { useState, memo, useCallback, useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
//import ArrowLeftIcon from 'icons/arrow-left.svg';

const Dropdown = ({
  on,
  playbackRates,
  activePlaybackRate,
  onClose,
  onChangePlaybackRate,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isIndex, setIsIndex] = useState(true);
  const [activeType, setActiveType] = useState('speed');
  const [dropdownHeight, setDropdownHeight] = useState('initial');

  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!isMounted) return;

    const outsideClickHandler = (event) => {
      if (!isMounted || !dropdownRef || !dropdownRef.current) return;
      if (!dropdownRef.current.contains(event.target)) {
        onClose(false);
      }
    };

    document.addEventListener('click', outsideClickHandler);

    return () => {
      document.removeEventListener('click', outsideClickHandler);
    };
  }, [isMounted, onClose]);

  useEffect(() => {
    if (!on) return;

    const dropdown = dropdownRef.current;
    const dropdownMenu = dropdown.firstChild;

    setDropdownHeight(dropdownMenu?.offsetHeight || 'initial');
  }, [on]);

  const dropdownEnteredHandler = useCallback(() => {
    setIsMounted(true);
  }, []);

  const dropdownExitedHandler = useCallback(() => {
    setIsMounted(false);
    setIsIndex(true);
    setDropdownHeight('initial');
  }, []);

  const calcHeight = useCallback((element) => {
    setDropdownHeight(element.offsetHeight);
  }, []);

  const selectMenuHandler = useCallback((type) => {
    return () => {
      setIsIndex(false);
      setActiveType(type);
    };
  }, []);

  const selectPlaybackRateHandler = useCallback(
    (playbackRate) => {
      return () => {
        setIsIndex(true);
        onChangePlaybackRate(playbackRate);
      };
    },
    [onChangePlaybackRate]
  );

  const indexMenu = (
    <div className="vp-dropdown__menu">
      <ul className="vp-dropdown__list">
        <li className="vp-dropdown__item" onClick={selectMenuHandler('speed')}>
          <span>Speed</span>
          <span>x {activePlaybackRate}</span>
        </li>
      </ul>
    </div>
  );

  const mainMenu = (
    <div className="vp-dropdown__menu">
      <div className="vp-dropdown__label" onClick={() => setIsIndex(true)}>
        {/*<ArrowLeftIcon />*/}
        <img src={require("../../../icons/arrow-left.svg").default} alt="" />
        <span>
          {activeType === 'speed' && 'Speed'}
          {activeType === 'resolution' && 'Resolution'}
        </span>
      </div>
      <ul className="vp-dropdown__list">
        {activeType === 'speed' &&
          playbackRates.map((playbackRate) => (
            <li
              key={playbackRate}
              className={`vp-dropdown__item${
                activePlaybackRate === playbackRate ? ' active' : ''
              }`}
              onClick={selectPlaybackRateHandler(playbackRate)}
            >
              {playbackRate}
            </li>
          ))}
      </ul>
    </div>
  );

  return (
    <CSSTransition
      in={on}
      classNames="vp-dropdown"
      timeout={200}
      mountOnEnter
      unmountOnExit
      onEntered={dropdownEnteredHandler}
      onExited={dropdownExitedHandler}
    >
      <div
        className="vp-dropdown"
        ref={dropdownRef}
        style={{ height: dropdownHeight }}
      >
        <CSSTransition
          in={isIndex}
          classNames="vp-menu-index"
          timeout={300}
          mountOnEnter
          unmountOnExit
          onEnter={calcHeight}
        >
          {indexMenu}
        </CSSTransition>

        <CSSTransition
          in={!isIndex}
          classNames="vp-menu-main"
          timeout={300}
          mountOnEnter
          unmountOnExit
          onEnter={calcHeight}
        >
          {mainMenu}
        </CSSTransition>
      </div>
    </CSSTransition>
  );
};

export default memo(Dropdown);

