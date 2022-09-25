import React, {useEffect, useState} from 'react';
import apiService from '../ApiServices'
import Tour from './Tour';
// import guide from "../assets/audio/barcelona_RickSteves_SFamilia.mp3";
// import image from "../assets/tour/coloseum.jpeg"
let image = "coloseum.jpeg"
let guide = "sagradaFamilia.mp3"

const Home = () => {

  const [tours, setTours] = useState([])

  useEffect(() => {
    apiService.getTours().then(tourList => setTours(tourList));
  })

  return (
    <div>
        {tours.map((tour) => 
          <Tour tour={tour} key={tour.id} />
        )}
    </div>
  )

}

export default Home;