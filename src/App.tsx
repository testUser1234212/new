import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Courses from "./components/Courses";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="App">
        <Header/>
        <div className={'data'}/>
        <Hero/>
        <Courses/>
        <Pricing/>
        <Footer/>
    </div>
  );
}

export default App;
