import React from 'react';
import './App.css';
import FeatureEvents from './Pages/FeatureEvents/FeatureEvents';
import OurPartners from './Pages/OurPartners/OurPartners';
import Coc from './Pages/CodOfConduct/Coc';

function App() {
  return (
    <div className='App'>
      {/* <h1>
      Gdg Cloud kolkata Website
    </h1> */}
      <div className='container'>
        <FeatureEvents />
      </div>
      <div className='container'>
        <OurPartners />
      </div>
      <div className='container'>
        <Coc />
      </div>
    </div>
  );
}

export default App;
