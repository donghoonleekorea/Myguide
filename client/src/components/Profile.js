import React, { useEffect, useState } from 'react';
import apiService from './../ApiServices';
const initialState = {
  firstName: '',
  lastName: '',
  savedTours: []
};

const Profile = ({isAuthenticated}) => {
  const [state, setState] = useState(initialState);

  const firstName = state.firstName || 'Missing';
  const lastName = state.lastName || 'No.';
  const savedTours = state.savedTours || [];

  useEffect(() => {
    const getProfile = async () => {
      const userInfo = await apiService.profile();
      console.log(userInfo)
      if (userInfo) {
        const { firstName, lastName, savedTours } = userInfo;
        setState((prevState) => {
          return {
            ...prevState,
            firstName,
            lastName,
            savedTours,
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
      
        {isAuthenticated ? (
          <>
            <h2>Hi {firstName} {lastName}</h2>
            <h3> 
            Let's explore the world <br></br>TOGETHER!
            </h3>
          </>
        ) : (
          <h3> 
          Please, create your account or login
          </h3>
        )}
        
        
    </section>
  );
};

export default Profile;