const base_URL = 'http://localhost:3010';

const apiService = {};

apiService.register = async (user) => {
  
  return await fetch(`${base_URL}/register`, {
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

apiService.login = async (user) => {
  
  return await fetch(`${base_URL}/login`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  
};

apiService.profile = async () => {
  
  return await fetch(`${base_URL}/profile`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  
};

apiService.getTours = async () => {

  return await fetch(`${base_URL}/getTours`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

}

apiService.logout = async () => {
  
  return await fetch(`${base_URL}/logout`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  
};

apiService.updateUserTours = async (user) => {
  
  return await fetch(`${base_URL}/updateUserTours`, {
    method: 'PUT',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  
};

export default apiService;