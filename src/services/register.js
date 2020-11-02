import api from './index';

export const registerNewUser = (userData) => {
  console.log('userData', userData)
  return api.request({
    method: 'POST',
    url: '/usuarios',
    data: {
      nome: userData.email,
      senha: userData.password
    }
  });
};

