import React from 'react';
import config from '../../config.json';

export const Ps1 = () => {
  return (
    <div>
      <span className="text-white font-bold">
        {config.ps1_username}
      </span>
      <span className="text-white">@</span>
      <span className="text-white font-bold">
        {config.ps1_hostname}
      </span>
      <span className="text-white">:$ ~ </span>
    </div>
  );
};

export default Ps1;
