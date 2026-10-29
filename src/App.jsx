import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Inicio from './pages/Inicio.jsx';
import Contacto from './pages/Contacto.jsx';
import AcercaDeNosotros from './pages/AcercaDeNosotros.jsx';
import PaginaBlob from './pages/PaginaBlob.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <div className="pagina">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/acerca-de-nosotros" element={<AcercaDeNosotros />} />
            <Route path="/blob" element={<PaginaBlob />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
