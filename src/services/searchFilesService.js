import api from './index';

export const getFiles = (query) => {
  return api.request({
    method: 'POST',
    url: '/api/searchFiles',
    data: {
      query: query
    }
  });
};
