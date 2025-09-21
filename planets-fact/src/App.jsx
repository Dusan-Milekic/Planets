import "./App.css";

import Header from "./components/Header";
import PlanetLinks from "./components/PlanetLinks";

function App() {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main>
        <nav>
          <PlanetLinks></PlanetLinks>
        </nav>
      </main>
    </>
  );
}

export default App;
