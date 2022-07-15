import './App.css';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import FeatureEvents from './Pages/FeatureEvents/FeatureEvents';
import OurPartners from './Pages/OurPartners/OurPartners';
import Coc from './Pages/CodOfConduct/Coc';
import OurTeam from './Pages/OurTeam/OurTeam';
import HomePage from './Pages/HomePage/HomePage';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <div className='App'>

      <div className="container">
        <HomePage />
      </div>
      <div className='container'>
        <FeatureEvents />
      </div>
      <div className='container'>
        <OurPartners />
      </div>
      {/* <div className="container">
        <OurTeam />
      </div> */}
      <div className='container'>
        <AboutUs />  
      </div>
      <div className='container'>
        <Coc />
      </div>
      <div className="container">
        <ContactUs />
      </div>
      <div className="container">
        <Footer />
      </div>

    </div>
  );
}

export default App;
