import Follow from '../components/Follow';
import Event from '../components/Event';
import Hero from '../components/Hero';
import About from '../components/About';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <div className="w-full">
        <Event name="Our Community" />
        <Event bg="black" name="Our Past" />
      </div>
      <Event name="Our" />
      <Follow />
    </main>
  );
};

export default Home;
