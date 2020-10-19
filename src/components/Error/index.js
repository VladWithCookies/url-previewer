import React from 'react';

import './styles.css';

const Error = ({ error }) => (
  <p className="error">
    {`Error: ${error}`}
  </p>
);

export default Error;
