import axios from 'axios';

axios.defaults.baseURL = 'http://hn.algolia.com/api/v1';

export const fetchArticlesByTopic = async topic => {
  const response = await axios.get('/search?query=' + topic);
  return response.data.hits;
};
