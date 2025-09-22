import React from "react";
import nepute from "../assets/planet-neptune-internal.svg";
import uranus from "../assets/planet-uranus-internal.svg"; // Ispravljen naziv fajla
import earth from "../assets/planet-earth-internal.svg";
import jupiter from "../assets/planet-jupiter-internal.svg";
import mars from "../assets/planet-mars-internal.svg";
import mercury from "../assets/planet-mercury-internal.svg";
import saturn from "../assets/planet-saturn-internal.svg";
import venus from "../assets/planet-venus-internal.svg";

export default class PlanetStructure extends React.Component {
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
      <div className="planet-image flex justify-center py-16">
        <img src={currentPlanet.src} alt={currentPlanet.alt} className="w-44" />
      </div>
    );
  }
}
