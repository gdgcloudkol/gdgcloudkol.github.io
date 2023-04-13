import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Team from "./pages/Team";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      {/* <Team /> */}
      <Footer />
    </>
  );
}

export default App;
