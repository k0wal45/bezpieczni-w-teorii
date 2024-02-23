import Footer from "./components/Footer";
import Fundraising from "./components/Fundraising";
import Hero from "./components/Hero";
import Kto from "./components/Kto";
import Milestones from "./components/Milestones";
import Partnerzy from "./components/Partnerzy";
import Program from "./components/Program";
import Projekt from "./components/Projekt";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <main className="bg-base lg:bg-phone max-w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Projekt />
      <Fundraising />
      <Program />
      <Kto />
      <Milestones />
      <Partnerzy />
      <Footer />
    </main>
    
  );
}

export default App;
