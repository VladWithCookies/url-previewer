import React from 'react';

import './styles.css';

const TextareaField = () => (
  <>
    <label htmlFor="textarea-field">
      Fill in URL to see preview
    </label>
    <textarea
      rows={5}
      autoFocus
      id="textarea-field"
      className="textarea-field"
    />
  </>
);

export default TextareaField;
