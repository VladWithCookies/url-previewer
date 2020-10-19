import React, { useState, useCallback, useEffect } from 'react';
import { debounce, map, uniq, reduce, pick, isEmpty } from 'lodash';
import getMetadata from 'url-metadata';

import { URL_REGEX, PROXY_URL } from '../../constants';
import parseUrlPreviews from '../../utils/parseUrlPreviews';
import parseHost from '../../utils/parseHost';
import TextareaField from '../TextareaField';
import URLPreviewList from '../URLPreviewList';
import Loader from '../Loader';
import Error from '../Error';
import './styles.css';

const App = () => {
  const [hosts, setHosts] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [previewsCache, setPreviewsCache] = useState({});
  const previews = pick(previewsCache, JSON.parse(hosts));

  useEffect(() => {
    const fetchPreviews = async () => {
      const parsedHosts = JSON.parse(hosts);

      const promises = reduce(parsedHosts, (accumulator, host) => {
        if (!previewsCache[host]) {
          accumulator.push(getMetadata(`${PROXY_URL}/${host}`));
        }

        return accumulator;
      }, []);

      setError(null);
      setLoading(true);

      try {
        const metadata = await Promise.all(promises);
        const previews = parseUrlPreviews(metadata);

        setPreviewsCache(state => ({ ...state, ...previews }));
      } catch ({ Error: error }) {
        setError(error);
      }

      setLoading(false);
    }

    fetchPreviews();
  }, [hosts]);

  const debouncedHandleChange =  useCallback(debounce(value => {
    const urls = value.match(URL_REGEX);
    const hosts = uniq(map(urls, parseHost));

    setHosts(JSON.stringify(hosts))
  }, 500), []);

  const handleChange = ({ target: { value }}) => {
    debouncedHandleChange(value);
  }

  return (
    <div className="app">
      <h1 className="app__title">
        URL Previewer
      </h1>
      <TextareaField
        onChange={handleChange}
        placeholder="Fill in some URL. For example: https://www.airbnb.com"
      />
      {!isEmpty(previews) && <URLPreviewList previews={previews} />}
      {isLoading && <Loader />}
      {error && <Error error={error} />}
    </div>
  );
}

export default App;
