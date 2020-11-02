import api from './index';

export const login = (userData) => {
  console.log('entrou no service', userData)
  return api.request({
    method: 'POST',
    url: '/autenticacao',
    data: {
      nome: userData.email,
      senha: userData.password
    }
  });
};

