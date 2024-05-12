import Btn from './Btn';
//import { ReactComponent as PipInIcon } from 'icons/pip-in.svg';
//import { ReactComponent as PipOutIcon } from 'icons/pip-out.svg';

const Pip = ({ isPipMode, onToggle }) => {
  return (
    <Btn label="Picture in Picture" onClick={onToggle}>
      {isPipMode ?<img src={require("../../../icons/pip-out.svg").default} alt="" />
:         <img src={require("../../../icons/pip-in.svg").default} alt="" />
}
    </Btn>
  );
};

export default Pip;


