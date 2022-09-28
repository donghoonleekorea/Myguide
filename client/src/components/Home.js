import React, {useEffect, useState} from 'react';
import apiService from '../ApiServices'
import Tour from './Tour';


const Home = ({ isSearched, setIsSearched }) => {

  const [tours, setTours] = useState([])
  const [searchedTours, setSearchedTours] = useState([]);

  useEffect(() => {
    apiService.getTours().then(tourList => setTours(tourList));
    
  },[])

  useEffect(() => {
    if ( isSearched.length > 0) {
      setSearchedTours(tours.filter(tour => tour.city.toLowerCase().startsWith(isSearched)));
    }
  },[isSearched])


  return (
    <div>
      <div className="header-bottom-margin"></div>
      <div className="tourList">
        {searchedTours.sort(() => Math.random() - 0.5).map((tour) => 
           <Tour tour={tour} key={tour._id} />
        )}
      </div>
      <div>
        <h2>All</h2>
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