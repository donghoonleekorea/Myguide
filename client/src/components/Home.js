import React, {useEffect, useState} from 'react';
import apiService from '../ApiServices'
import Tour from './Tour';


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