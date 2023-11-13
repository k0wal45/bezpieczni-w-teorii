import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Kto from "./components/Kto";
import Partnerzy from "./components/Partnerzy";
import Projekt from "./components/Projekt";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <main className="bg-base max-w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Projekt />
      <Kto />
      <Partnerzy />
      <Footer />
    </main>
    
  );
}

export default App;
