import React from 'react';
import getUrlMetadata from 'url-metadata';
import { debounce, map, uniq } from 'lodash';

import { URL_REGEX, PROXY_URL } from '../../constants';
import getPreviewData from '../../utils/getPreviewData';
import TextareaField from '../TextareaField';
import URLPreviewList from '../URLPreviewList';
import Loader from '../Loader';
import './styles.css';

const App = () => {
  const [isLoading, setLoading] = React.useState(false);
  const [previews, setPreviews] = React.useState([]);

  const getPreviews = async (value) => {
    const urls = value.match(URL_REGEX) || [];
    const promises = map(uniq(urls), (url) => getUrlMetadata(`${PROXY_URL}/${url}`));

    setLoading(true);

    const metadata = await Promise.all(promises);

    setLoading(false);

    const previews = getPreviewData(metadata);

    setPreviews(previews);
  };

  const debouncedGetPreviews = React.useCallback(debounce(getPreviews, 500), []);

  const handleChange = (event) => {
    debouncedGetPreviews(event.target.value)
  }

  return (
    <div className="app">
      <h1 className="app__title">
        URL Previewer
      </h1>
      <TextareaField onChange={handleChange} />
      {isLoading ? <Loader /> : <URLPreviewList previews={previews} />}
    </div>
  );
}

export default App;
