import React from 'react';

import './styles.css';

const TextareaField = ({ onChange, placeholder }) => (
  <textarea
    rows={5}
    onChange={onChange}
    className="textarea-field"
    placeholder={placeholder}
    autoFocus
  />
);

export default TextareaField;
