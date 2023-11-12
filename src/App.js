import Hero from "./components/Hero";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <main className=" bg-base">
      <Navbar />
      <Hero />
      <section className="h-[400vh]"></section>
    </main>
    
  );
}

export default App;
