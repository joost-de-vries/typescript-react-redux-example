import { post } from '../server/';

const LOGIN_ERR_MSG = `
  The username or password you have entered is invalid.
`;

export function login(user) {
  //  return new Promise((resolve, reject) => {
  return post('/auth/login', user)
    // .then(json => resolve(json.meta))
    .then((json?, err?) => {
      if (err) {
        throw new Error(LOGIN_ERR_MSG);
      } else {
        return json.meta;
      }
    });
}
