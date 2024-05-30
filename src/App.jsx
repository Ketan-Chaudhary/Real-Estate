import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Partners from "./Components/Partners/Partners";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Partners/>
    </div>
  );
}

export default App;
