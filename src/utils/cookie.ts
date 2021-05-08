import cookie from 'js-cookie';

const TOKEN_KEY = 'zhishui';

export const setToken = (token: string) => cookie.set(TOKEN_KEY, token);

export const getToken = () => cookie.get(TOKEN_KEY) || '';

export const removeToken = () => cookie.remove(TOKEN_KEY);
