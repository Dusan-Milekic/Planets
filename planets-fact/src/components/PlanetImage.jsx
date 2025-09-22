import React from "react";
import nepute from "../assets/planet-neptune.svg";
import uranus from "../assets/planet-uranus.svg";
import earth from "../assets/planet-earth.svg";
import jupiter from "../assets/planet-jupiter.svg";
import mars from "../assets/planet-mars.svg";
import mercury from "../assets/planet-mercury.svg";
import saturn from "../assets/planet-saturn.svg";
import venus from "../assets/planet-venus.svg";

export default class PlanetImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planet: props.planet || "neptune",
    };
  }

  render() {
    // Objekt koji mapira planete na njihove slike i alt tekstove
    const planetData = {
      neptune: { src: nepute, alt: "Neptune" },
      uranus: { src: uranus, alt: "Uranus" },
      earth: { src: earth, alt: "Earth" },
      jupiter: { src: jupiter, alt: "Jupiter" },
      mars: { src: mars, alt: "Mars" },
      mercury: { src: mercury, alt: "Mercury" },
      saturn: { src: saturn, alt: "Saturn" },
      venus: { src: venus, alt: "Venus" },
    };

    // Uzmi podatke za trenutnu planetu ili fallback na Neptune
    const currentPlanet =
      planetData[this.state.planet.toLowerCase()] || planetData.neptune;

    return (
      <div className="planet-image flex justify-center py-16 relative animate-fade-down">
        <img src={currentPlanet.src} alt={currentPlanet.alt} className="w-44" />
      </div>
    );
  }
}
