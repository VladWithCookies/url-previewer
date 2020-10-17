import { PROXY_URL } from '../constants';

const getPreviewData = metadata => (
  metadata.map(data => {
    const { title, description } = data;
    const url = data.url.replace(`${PROXY_URL}/`, '');
    const host = url.replace(/((http|https):\/\/)?(www.)?/, '');
    const image = data.image[0] === '/' ? `https://www.${host}${data.image}` : data.image;
    console.log(data.image);
    return { title, description, image, url }
  })
);

export default getPreviewData;
