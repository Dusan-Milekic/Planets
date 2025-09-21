import "./App.css";

import Header from "./components/Header";
import PlanetLinks from "./components/PlanetLinks";
import PlanetImage from "./components/PlanetImage";
import PlanetInfo from "./components/PlanetInfo";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Komponenta koja koristi useLocation
function PlanetPage() {
  const location = useLocation();
  const planetName = location.pathname.slice(1); // Uklanja "/" sa početka
  console.log(planetName, "ASD");
  return (
    <>
      <PlanetImage planet={planetName} />
      <PlanetInfo planet={planetName} />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <header>
        <Header />
      </header>
      <main>
        <nav>
          <PlanetLinks />
        </nav>

        <Routes>
          <Route path="/*" element={<PlanetPage />} />
          <Route
            path="/"
            element={
              <div>
                <h2>Dobrodošli! Izaberite planetu za pregled.</h2>
              </div>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
