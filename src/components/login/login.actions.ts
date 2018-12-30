export const ACTIONS = {
  login(token: string) {
    return {type: 'login', payload: {token}}
  },
  logout(token: string) {
    return {type: 'logout', payload: {token}}
  }
};
