import React from 'react';


const Tour = ({tour}) => {

  return (
          <div className="tour">
            <div className="tourImg">
              <img src={require(`../assets/tour/${tour.img}`)} alt="img"></img>
            </div>
            <p>{tour.country},  {tour.city}</p>
            <div className="tourTitle">
              <h1>{tour.title}</h1>
            </div>
            <audio className="audioPlayer" src={require(`../assets/audio/${tour.audio}`)} controls></audio>
            <p>{tour.description}</p>
          </div>
  )

}

export default Tour;