import React from "react";
import data from "../data.json";

export default class PlanetText extends React.Component {
  constructor(props) {
    super(props);

    const foundPlanet = data.find((d) => d.name === props.planet);

    this.state = {
      planet: foundPlanet || { name: "Unknown", overview: "Loading..." },
    };
  }

  render() {
    return (
      <div className="text">
        <h1>{this.state.planet.name}</h1>
        <p>{this.state.planet.overview.content}</p>
      </div>
    );
  }
}
