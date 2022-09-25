const base_URL = 'http://localhost:3010';

const apiService = {};

apiService.register = (user) => {
  
  return fetch(`${base_URL}/register`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  
};

apiService.test = async () => {

  try {
    const result = await fetch(`${base_URL}/test`);
    return await result.json()
  } catch (err) {
    console.log('ERROR in test in ApiServices' + err);
  }

};

apiService.login = (user) => {
  
  return fetch(`${base_URL}/login`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  
};

apiService.profile = () => {
  
  return fetch(`${base_URL}/profile`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  
};

apiService.getTours = () => {

  return fetch(`${base_URL}/getTours`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

}

// apiService.logout = () => {
  
//   return fetch(`${base_URL}/logout`, {
//     method: 'POST',
//     credentials: 'include',
//     mode: 'cors',
//     headers: { 'Content-Type': 'application/json' },
//   })
//     .then((res) => res.json())
//     .catch((err) => console.log(err));
  
// };

export default apiService;