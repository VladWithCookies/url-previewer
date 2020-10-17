import React from 'react';

import URLPreview from '../URLPreview';
import './styles.css';

const URLPreviewList = () => (
  <ul className="url-preview-list">
    <li className="url-preview-list__item">
      <URLPreview />
    </li>
    <li className="url-preview-list__item">
      <URLPreview />
    </li>
  </ul>
);

export default URLPreviewList;
