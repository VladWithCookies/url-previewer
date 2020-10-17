import { reduce } from 'lodash';

import { PROXY_URL } from '../constants';
import parseHost from './parseHost';

const parseUrlPreviews = metadata => (
  reduce(metadata, (accumulator, data) => {
    const { title, description } = data;
    const url = data.url.replace(`${PROXY_URL}/`, '');
    const host = parseHost(url);
    const image = data.image[0] === '/' ? `https://www.${host}${data.image}` : data.image;

    accumulator[host] = { title, description, image, host };

    return accumulator;
  }, [])
);

export default parseUrlPreviews;
