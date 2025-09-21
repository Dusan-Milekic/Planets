import React from "react";
import nepute from "../assets/planet-neptune.svg";
import uranus from "../assets/planet-uranus.svg";
export default class PlanetImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planet: props.planet || "neptune", // ✅ Ispravno
    };
  }

  ChangeImage = (planet_arg) => {
    this.setState({ planet: planet_arg });
  };
  render() {
    if (this.state.planet == "neptune")
      return (
        <>
          <div className="planet-image flex justify-center py-16">
            <img src={nepute} alt="nepute" className="w-44" />
          </div>
        </>
      );

    if (this.state.planet == "uranus")
      return (
        <>
          <div className="planet-image flex justify-center py-16">
            <img src={uranus} alt="nepute" className="w-44" />
          </div>
        </>
      );
  }
}
