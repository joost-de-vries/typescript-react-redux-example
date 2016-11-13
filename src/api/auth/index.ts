import { post } from '../server/';

const LOGIN_ERR_MSG = `
  The username or password you have entered is invalid.
`;

export function login(user) {
  return post('/auth/login', user)
    .then((json?, err?) => {
      if (err) {
        throw new Error(LOGIN_ERR_MSG);
      } else {
        return json.meta;
      }
    });
}
