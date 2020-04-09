import axios from 'axios';

export const register = newUser => { 
  return axios
    .post('users/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered', response.data)
    });
};

export const login = Users => {
  return axios
    .post('users/login', {
      email: Users.email,
      password: Users.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    });
};