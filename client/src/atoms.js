import { atom } from 'recoil';

export const profileState = atom({
  key: 'profileState',
  default: {},
});

export const authState = atom({
  key: 'auth',
  default: {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    user: null,
  },
});
