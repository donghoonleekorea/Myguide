import React, { useEffect, useState } from 'react';
import apiService from './../ApiServices';
const initialState = {
  firstName: '',
  lastName: '',
};

const Profile = ({isAuthenticated}) => {
  const [state, setState] = useState(initialState);

  const firstName = state.firstName || 'Missing';
  const lastName = state.lastName || 'No.';

  useEffect(() => {
    const getProfile = async () => {
      const userInfo = await apiService.profile();
      if (userInfo) {
        const { firstName, lastName } = userInfo;
        setState((prevState) => {
          return {
            ...prevState,
            firstName,
            lastName,
          };
        });
      } else {
        console.log('No user info found 😞');
      }
    };
    getProfile();
  }, []);

  return (
    <section className="profile">
      <h2>My Profile</h2>
        {isAuthenticated ? (
        <h3> 
          Hi {firstName} {lastName}, let's explore the world
        </h3>
        ) : (
          <h3> 
          Please, create your account or login
        </h3>
        )}
        
        
    </section>
  );
};

export default Profile;