import React from 'react';
import './App.css';
import AboutUs from './Pages/AboutUs/AboutUs';
import FeatureEvents from './Pages/FeatureEvents/FeatureEvents';
import OurPartners from './Pages/OurPartners/OurPartners';

function App() {
  return (
    <div className="App">
      {/* <h1>
        Gdg Cloud kolkata Website
      </h1> */}
      <div className="container">
        <FeatureEvents />
      </div>
      <div className="container">
        <OurPartners />
      </div>
      <div className='container'>
        <AboutUs />  
      </div>
    </div>
  );
}

export default App;
