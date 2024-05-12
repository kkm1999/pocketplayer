import { memo } from 'react';

//import { ReactComponent as ReloadIcon } from 'icons/reload.svg';
import './Error.css';

const Error = ({ error }) => {
  const refreshHandler = () => {
    window.location.reload();
  };

  return error ? (
    <div className="vp-error">
      <p>
        {error.code ? `${error.code}: ` : ''}
        {error.message || 'Error occurred! Please try again'}
      </p>
    <img src={require("../../../../icons/reload.svg").default} alt="" onClick={refreshHandler} />
    </div>
  ) : null;
};

export default memo(Error);


