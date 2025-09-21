import React from "react";
export default class PlanetLinks extends React.Component {
  constructor(params) {
    super(params);
  }

  render() {
    return (
      <>
        <div className="planet-links flex px-8 py-5 justify-center gap-16 border-b-1 border-gray-500">
          <a href="#" className="tracking-[1.93px]  text-xl relative">
            OVERVIEW
            <span className="absolute h-1 w-full left-0 -bottom-5 bg-[#2968F0] hidden"></span>
          </a>
          <a href="#" className="tracking-[1.93px] text-xl relative">
            STRUCTURE
            <span className="absolute h-1 w-full left-0 -bottom-5 bg-[#2968F0] hidden"></span>
          </a>
          <a href="#" className="tracking-[1.93px] text-xl relative">
            SURFACE
            <span className="absolute h-1 w-full left-0 -bottom-5 bg-[#2968F0] hidden"></span>
          </a>
        </div>
      </>
    );
  }
}
