import "./App.css";

import Header from "./components/Header";
import PlanetLinks from "./components/PlanetLinks";
import PlanetImage from "./components/PlanetImage";
import PlanetText from "./components/PlanetText";
function App() {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main>
        <nav>
          <PlanetLinks></PlanetLinks>
          <PlanetImage></PlanetImage>
          <PlanetText planet="Neptune"></PlanetText>
        </nav>
      </main>
    </>
  );
}

export default App;
