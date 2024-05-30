import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Partners from "./Components/Partners/Partners";
import Residencies from "./Components/Residencies-crousel/Residencies";
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
    </div>
  );
}

export default App;
