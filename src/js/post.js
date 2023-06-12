/*
 * Method (POST). Headers ("Content-Type": "application/json"). Body.
 */

/* const { userInfo } = require('os'); */

/* const BASE_URL = ' http://localhost:3000';

const createUser = userInfo => {
  return fetch(`${BASE_URL}/users`, {
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};

createUser({
  name: 'Mittie Alexander',
  username: 'Antonette',
  email: 'hec@suwmer.edu',
  address: {
    street: null,
    suite: null,
    city: null,
    zipcode: '90566-7771',
    geo: {
      lat: null,
      lng: null,
    },
  },
  phone: '(811) 572-9923',
  website: null,
  company: {
    name: 'Deckow-Crist',
    catchPhrase: 'Proactive didactic contingency',
    bs: 'synergize scalable supply-chains',
  },
})
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
 */
/* const BASE_URL = 'http://localhost:3000';

const createUser = userInfo => {
  return fetch(`${BASE_URL}/users`, {
    method: 'POST',
    body: JSON.stringify(userInfo),
    'Content-Type': 'application/json',
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

createUser({
  name: 'Mittie Alexander',
  username: 'Antonette',
  email: 'hec@suwmer.edu',
  address: {
    street: null,
    suite: null,
    city: null,
    zipcode: '90566-7771',
    geo: {
      lat: null,
      lng: null,
    },
  },
  phone: '(811) 572-9923',
  website: null,
  company: {
    name: 'Deckow-Crist',
    catchPhrase: 'Proactive didactic contingency',
    bs: 'synergize scalable supply-chains',
  },
})
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
 */
