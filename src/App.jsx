import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components.jsx";
import { Katalog } from "./pages/Katalog.jsx";
import { Kontak } from "./pages/kontak.jsx";
import { Beranda } from "./pages/beranda.jsx";
import { Favorit } from "./pages/favorit.jsx";
import { DetailBuku } from "./pages/detail-buku.jsx";
function App() {
  return (
    <>
      <div className="grid-buku">
        <Header />

        {/*navbar untuk pindah halaman*/}
        <nav className="navbar">
          <Link to="/" className="nav-link">
            Beranda
          </Link>
          <Link to="/katalog" className="nav-link">
            Katalog
          </Link>
          <Link to="/favorit" className="nav-link">
            Favorit
          </Link>
          <Link to="/kontak" className="nav-link">
            Kontak
          </Link>
        </nav>

        {/* Area Routing Halaman */}
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/katalog" element={<Katalog />} />
          <Route path="/favorit" element={<Favorit/>} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/buku/:id" element={<DetailBuku/>}></Route>
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
