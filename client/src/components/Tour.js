import React from 'react';
import apiService from '../ApiServices';


const Tour = ({tour}) => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { _id, savedTours } = await apiService.profile()
    console.log(_id);
    savedTours.push(tour.title);
    const userInfo = { _id, savedTours}
    await apiService.updateUserTours(userInfo);
  }

  return (
          <div className="tour">
            <div className="tourImg">
              <img src={`https://myguidefirstsoloproject2022codeworks.s3.eu-central-1.amazonaws.com/assets/mainImage/${tour.img}`} alt="img"></img>
            </div>
            <p>{tour.country},  {tour.city}</p>
            <div className="tourTitle">
              <h1>{tour.title}</h1>
            </div>
            <audio className="audioPlayer" src={`https://myguidefirstsoloproject2022codeworks.s3.eu-central-1.amazonaws.com/assets/audio/${tour.audio}`} controls></audio>
            <p className='tourDescription'>{tour.description}</p>
            <div className="saveTour">
              <button onClick={handleSubmit}>save</button>
            </div>
          </div>
  )

}

export default Tour;