import api from './axios';

export const getBannerItems = () => {
  return api.request({
    method: 'GET',
    url: '/banner'
  });
};

