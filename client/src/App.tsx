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
      <HomePage />
      <FeatureEvents />
      {/* <OurPartners /> */}
      {/* <AboutUs />  */}
      <Coc />
      <ContactUs />
      <Footer />


    </div>
  );
}

export default App;
