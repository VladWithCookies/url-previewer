import React from 'react';
import { map } from 'lodash';

import URLPreview from '../URLPreview';
import './styles.css';

const URLPreviewList = ({ previews }) => (
  <ul className="url-preview-list">
    {map(previews, preview => (
      <li
        key={preview.host}
        className="url-preview-list__item"
      >
        <URLPreview preview={preview} />
      </li>
    ))}
  </ul>
);

export default URLPreviewList;
