import React from 'react';

import './styles.css';

const URLPreview = ({
  preview: {
    host,
    title,
    image,
    description,
  },
}) => (
  <a
    href={`https://${host}`}
    target="_blank"
    className="url-preview"
    rel="noopener noreferrer"
  >
    <article>
      <img
        className="url-preview__image"
        src={image}
        alt=""
      />
      <div className="url-preview__info">
        <p className="url-preview__info-title">
          {title}
        </p>
        <p className="url-preview__info-description">
          {description}
        </p>
        <p className="url-preview__info-host">
          {host}
        </p>
      </div>
    </article>
  </a>
);

export default URLPreview;
