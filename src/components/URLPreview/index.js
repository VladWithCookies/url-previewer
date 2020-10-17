import React from 'react';

import './styles.css';

const URLPreview = ({
  preview: {
    url,
    title,
    image,
    description,
  },
}) => (
  <a
    href={url}
    targe="_blank"
    className="url-preview"
    rel="noopener noreferrer"
  >
    <article>
      {image && (
        <img
          className="url-preview__image"
          src={image}
          alt=""
        />
      )}
      <div className="url-preview__info">
        <p className="url-preview__info-title">
          {title}
        </p>
        <p className="url-preview__info-description">
          {description}
        </p>
        <p className="url-preview__info-link">
          {url}
        </p>
      </div>
    </article>
  </a>
);

export default URLPreview;
