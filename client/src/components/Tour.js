import React, {useEffect, useState} from 'react';
import apiService from '../ApiServices'
// import guide from "../assets/audio/barcelona_RickSteves_SFamilia.mp3";
// import image from "../assets/tour/coloseum.jpeg"
let image = "coloseum.jpeg"
let guide = "sagradaFamilia.mp3"

const Tour = ({tour}) => {

  return (
          <div className="home">
            <h1>{tour.title}</h1>
            <p>{tour.country},  {tour.city}</p>
            <img src={require(`../assets/tour/${tour.img}`)} alt="img"></img>
            <audio className="audioPlayer" src={require(`../assets/audio/${tour.audio}`)} controls></audio>
            <p>{tour.description}</p>
          </div>
  )

}

export default Tour;