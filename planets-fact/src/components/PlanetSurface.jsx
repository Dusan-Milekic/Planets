import React from "react";
import nepute from "../assets/geology-neptune.png";
import uranus from "../assets/geology-uranus.png"; // Ispravljen naziv fajla
import earth from "../assets/geology-earth.png";
import jupiter from "../assets/geology-jupiter.png";
import mars from "../assets/geology-mars.png";
import mercury from "../assets/geology-mercury.png";
import saturn from "../assets/geology-saturn.png";
import venus from "../assets/geology-venus.png";

export default class PlanetSurface extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planet: props.planet || "neptune",
    };
  }

  // Dodaj componentDidUpdate da reaguje na promene props-a
  componentDidUpdate(prevProps) {
    if (prevProps.planet !== this.props.planet) {
      this.setState({ planet: this.props.planet });
    }
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
      planetData[this.state.planet?.toLowerCase()] || planetData.neptune;

    return (
      <img
        src={currentPlanet.src}
        alt={currentPlanet.alt}
        className="w-20 py-0 absolute  pb-29 left-2/4 -translate-1/2 animate-fade"
      />
    );
  }
}
