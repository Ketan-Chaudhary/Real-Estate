import Contact from "./Components/Contact/Contact";
import GetStarted from "./Components/GetStarted/GetStarted";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Partners from "./Components/Partners/Partners";
import Residencies from "./Components/Residencies-crousel/Residencies";
import Values from "./Components/Values/Values";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Partners/>
      <Residencies/>
      <Values/>
      <Contact/>
      <GetStarted/>
    </div>
  );
}

export default App;
