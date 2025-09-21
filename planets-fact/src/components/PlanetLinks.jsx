import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function PlanetLinks() {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter((part) => part);
  const planetName = pathParts[0]; // Ime planete (npr. "neptune")
  const basePath = `/${planetName}`; // Osnovni path (npr. "/neptune")

  return (
    <>
      <div className="planet-links flex px-8 py-5 justify-center gap-16 border-b-1 border-gray-500">
        <Link to={basePath} className="tracking-[1.93px] text-xl relative">
          OVERVIEW
          <span className="absolute h-1 w-full left-0 -bottom-5 bg-[#2968F0] hidden"></span>
        </Link>
        <Link
          to={`${basePath}/structure`}
          className="tracking-[1.93px] text-xl relative"
        >
          STRUCTURE
          <span className="absolute h-1 w-full left-0 -bottom-5 bg-[#2968F0] hidden"></span>
        </Link>
        <Link
          to={`${basePath}/surface`}
          className="tracking-[1.93px] text-xl relative"
        >
          SURFACE
          <span className="absolute h-1 w-full left-0 -bottom-5 bg-[#2968F0] hidden"></span>
        </Link>
      </div>
    </>
  );
}
