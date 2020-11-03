import api from './index';

export const getFiles = (query) => {
  console.log('query:', query)
  return api.request({
    method: 'POST',
    url: '/api/searchFiles',
    data: {
      query: query
    }
  });
};
