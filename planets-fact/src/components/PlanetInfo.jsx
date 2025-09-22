import React from "react";
import data from "../data.json";

export default class PlanetInfo extends React.Component {
  constructor(props) {
    super(props);
    const formated =
      String(props.planet).charAt(0).toUpperCase() +
      String(props.planet).slice(1);
    const foundPlanet = data.find((d) => d.name === formated);

    this.state = {
      planet: foundPlanet || { name: "Unknown", overview: "Loading..." },
    };
  }

  render() {
    return (
      <div className="text px-8 ">
        <h1 className="text-4xl mb-7 animate-fade-left">
          {this.state.planet.name}
        </h1>
        <p className="animate-fade-right">
          {this.state.planet.overview.content}
        </p>
        <div className="wikipedia py-8">
          <p className="animate-fade">
            Source: <a href="#">Wikipedia</a>
          </p>
        </div>
        <div className="info flex flex-col gap-3 pb-8 animate-fade-up ">
          <div className="item flex justify-between py-4 border border-gray-500 px-4 hover:scale-95 hover:bg-black transition-colors">
            <p className="text-gray-500">ROTATION TIME</p>
            <p className="text-xl font-bold uppercase">
              {this.state.planet.rotation}
            </p>
          </div>
          <div className="item flex justify-between py-4 border border-gray-500 px-4 hover:scale-95 hover:bg-black transition-colors">
            <p className="text-gray-500">REVOLUTION TIME</p>
            <p className="text-xl font-bold uppercase">
              {this.state.planet.revolution}
            </p>
          </div>
          <div className="item flex justify-between py-4 border border-gray-500 px-4 hover:scale-95 hover:bg-black transition-colors">
            <p className="text-gray-500">RADIUS</p>
            <p className="text-xl font-bold uppercase">
              {this.state.planet.radius}
            </p>
          </div>
          <div className="item flex justify-between py-4 border border-gray-500 px-4 hover:scale-95 hover:bg-black transition-colors">
            <p className="text-gray-500">AVERAGE TEMP.</p>
            <p className="text-xl font-bold uppercase">
              {this.state.planet.temperature}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
