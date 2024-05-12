import { memo } from 'react';

import Btn from './Btn';
//import { ReactComponent as SettingIcon } from 'icons/gear.svg';

const Settings = ({ onToggle }) => {
  return (
    <Btn label="Settings" onClick={onToggle}>
     <img src={require("../../../icons/gear.svg").default} alt="" />

    </Btn>
  );
};

export default memo(Settings);


