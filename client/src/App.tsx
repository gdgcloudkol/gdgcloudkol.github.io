import './App.css';
import ContactUs from './Pages/ContactUs/ContactUs';
import FeatureEvents from './Pages/FeatureEvents/FeatureEvents';
import OurPartners from './Pages/OurPartners/OurPartners';
import Coc from './Pages/CodOfConduct/Coc';
import OurTeam from './Pages/OurTeam/OurTeam';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div className='App'>
      {/* <h1>
      Gdg Cloud kolkata Website
    </h1> */}
      <div className="container">
        <HomePage />
      </div>
      <div className='container'>
        <FeatureEvents />
      </div>
      <div className='container'>
        <OurPartners />
      </div>
      <div className="container">
        <OurTeam />
      </div>
      <div className='container'>
        <Coc />
      </div>
      <div className="container">
        <ContactUs />
      </div>

    </div>
  );
}

export default App;
