import React from 'react';

import './styles.css';

const URLPreview = () => (
  <a
    href="/"
    className="url-preview"
  >
    <article>
      <img
        src="https://picsum.photos/100"
        alt=""
      />
      <div className="url-preview__info">
        <p className="url-preview__info-title">
          TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle
        </p>
        <p className="url-preview__info-description">
          DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription
          DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription
        </p>
        <p className="url-preview__info-link">
          www.example.com
        </p>
      </div>
    </article>
  </a>
);

export default URLPreview;
