import api from './index';

export const getBannerItems = () => {
  return api.request({
    method: 'GET',
    url: '/api/banner'
  });
};

export const deleteBannerItem = (id) => {
  return api.request({
    method: 'DELETE',
    url: '/api/banner',
    data: {
      bannerItemId: id
    }
  });
}

export const updateBannerItem = (id, title) => {
  return api.request({
    method: 'PUT',
    url: '/api/banner',
    data: {
      bannerItemId: id,
      title: title
    }
  });
}

export const createBannerItem = (title, image) => {
  const formData = new FormData();
  formData.append('image',image);
  formData.append('title', title)

  return api.request({
    method: 'POST',
    url: '/api/banner',
    data: formData
  });
}