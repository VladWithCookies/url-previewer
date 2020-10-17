import React from 'react';

import './styles.css';

const TextareaField = ({ onChange }) => (
  <>
    <label htmlFor="textarea-field">
      Fill in URL to see preview
    </label>
    <textarea
      id="textarea-field"
      rows={5}
      onChange={onChange}
      className="textarea-field"
      autoFocus
    />
  </>
);

export default TextareaField;
