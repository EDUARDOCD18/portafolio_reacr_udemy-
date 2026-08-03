import Header from "./components/layout/Header";
import Hero from "./components/layout/hero";
import Clientes from "./components/layout/Clientes";
import Trabajos from "./components/layout/Trabajos";
import AcercaDe from "./components/layout/AcercaDe";
import Contacto from "./components/layout/Contacto";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <div className="contenedor">
        <Header />
        <Hero />
        <Clientes />
        <Trabajos />
        <AcercaDe />
        <Contacto />
        <Footer />
      </div>
    </>
  );
}

export default App;
