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
      <div className="2xl:flex w-full 2xl:justify-center 2xl:items-center py-20">
        <div className="2xl:w-2/4 scale-150">
          <PlanetImage planet={planetName} />
        </div>
        <div className="2xl:w-2/4">
          <PlanetInfo planet={planetName} />
        </div>
      </div>
    </>
  );
}
function PlanetSurfacePage() {
  const { planetName } = useParams();

  return (
    <>
      <div className="surface 2xl:flex w-full  2xl:justify-center 2xl:items-center py-20">
        <div className="2xl:w-2/4 scale-150">
          <PlanetImage planet={planetName} />
          <PlanetSurface planet={planetName} />
        </div>
        <div className="2xl:w-2/4">
          <PlanetInfo planet={planetName} />
        </div>
      </div>
    </>
  );
}
function PlanetStructurePage() {
  const { planetName } = useParams();

  return (
    <>
      <div className="strcutre 2xl:flex w-full  2xl:justify-center 2xl:items-center py-20">
        <div className="2xl:w-2/4 scale-150">
          <PlanetStructure planet={planetName} />
        </div>
        <div className="2xl:w-2/4">
          <PlanetInfo planet={planetName} />
        </div>
      </div>
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
      <footer className="py-11 text-white opacity-50">
        <p>&copy; Created by: Dusan Milekic</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
