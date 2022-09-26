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
  },[])

  return (
    <div>
      <div className="header-bottom-margin"></div>
      <div className="tourList">
        {tours.map((tour) => 
           <Tour tour={tour} key={tour._id} />
        )}
      </div>
      <div className="tourList">
        {tours.map((tour) => 
          <Tour tour={tour} key={tour._id} />
        )}
      </div>
    </div>
    
  )

}

export default Home;