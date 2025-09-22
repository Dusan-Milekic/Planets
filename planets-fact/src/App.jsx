import "./App.css";

import Header from "./components/Header";
import PlanetLinks from "./components/PlanetLinks";
import PlanetImage from "./components/PlanetImage";
import PlanetInfo from "./components/PlanetInfo";
import PlanetStructure from "./components/PlanetStructure";
import PlanetSurface from "./components/PlanetSurface";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

// Komponenta koja koristi useParams umesto useLocation
function PlanetPage() {
  const { planetName } = useParams();

  return (
    <>
      <PlanetImage planet={planetName} />
      <PlanetInfo planet={planetName} />
    </>
  );
}
function PlanetSurfacePage() {
  const { planetName } = useParams();

  return (
    <>
      <div className="surface">
        <PlanetImage planet={planetName} />
        <PlanetSurface planet={planetName} />
      </div>

      <PlanetInfo planet={planetName} />
    </>
  );
}
function PlanetStructurePage() {
  const { planetName } = useParams();

  return (
    <>
      <PlanetStructure planet={planetName} />
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
        <nav className="md:hidden">
          <PlanetLinks />
        </nav>

        <Routes>
          <Route path="/:planetName" element={<PlanetPage />} />
          <Route
            path="/:planetName/structure"
            element={<PlanetStructurePage />}
          />
          <Route path="/:planetName/surface" element={<PlanetSurfacePage />} />

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
