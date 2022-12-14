
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './Header'
import About from './About'
import axios from 'axios'
import UserPageHeader from './UserPageHeader'
import MyTrips from './MyTripsPage'
import TripHeader from './TripHeader'
import TripPage from './TripPage'
// import MyTripsSidebar from './MyTripsSidebar'

function App() {
  const[ page, setPage ] = useState('home')
  const [trips, updateTrips] = useState([]);
  const addTrip = (tripInfo) => {
    
    // todo: add axios call to save the data
    var data = tripInfo;
    
    axios.post('https://8000-lynz951-tripwizardbacke-gwc815o36p3.ws-us77.gitpod.io/api/trip/', 
    data, 
    {
      'content-type': 'application/json'
    }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    updateTrips([...trips, tripInfo]);
  };
  console.log(trips)

  return (

    <div className="App">
      {(page === 'home') && 
      <>
      <Header />
      <About />
      </>}
     
      {(page === 'mytrips') && 
      <>
      <UserPageHeader addTrip={addTrip}/>
      <MyTrips />
      {/* <MyTripsSidebar /> */}
      </>}

      {(page === 'trip') && 
      <>
      <TripHeader />
      <TripPage />
  
      </>}

        <button onClick={() => setPage('mytrips')}>Click for My Trips</button>
        <button onClick={() => setPage('home')}>Go to Home</button>
        <button onClick={() => setPage('trip')}>Go to Trip Page</button>
    </div>
  );
}

export default App;
