import { NavLink, useLocation } from "react-router-dom";

// ceo literal sa varijantom unutra:
const HOVER_BG = {
  mercury: "md:hover:bg-white",
  venus: "md:hover:bg-[#EDA249]",
  earth: "md:hover:bg-[#2D68F0]",
  mars: "md:hover:bg-[#D14C32]",
  jupiter: "md:hover:bg-[#D83A34]",
  saturn: "md:hover:bg-[#CD5120]",
  uranus: "md:hover:bg-[#1EC2A4]",
  neptune: "md:hover:bg-[#2D68F0]",
};

// opcionalno: različita boja teksta na hover
// (ako je bg white, bolje text-black da ne nestane tekst)
const HOVER_TEXT = {
  mercury: "md:hover:text-black",
  default: "md:hover:text-white",
};

export default function PlanetLinks() {
  const { pathname } = useLocation();
  const planetName = pathname.split("/").filter(Boolean)[0] ?? "earth";
  const basePath = `/${planetName}`;

  const linkBase =
    "tracking-[1.93px] text-xl relative md:border md:py-2 flex gap-5 items-center px-5 py-4 cursor-pointer";

  const hoverBg = HOVER_BG[planetName] ?? "md:hover:bg-[#2986F0]";
  const hoverText = HOVER_TEXT[planetName] ?? HOVER_TEXT.default;

  return (
    <div className="planet-links flex justify-center gap-16 border-b px-8  md:flex-col md:max-w-xs md:border-b-0 md:gap-4">
      <NavLink
        to={basePath}
        className={`${linkBase} ${hoverBg} ${hoverText} md:hover:border-transparent md:py-3 md:px-0 md:pr-20`}
        end
      >
        <p className="pl-6 text-sm hidden md:block">01</p>
        <p>OVERVIEW</p>
        <span className="absolute h-1 w-full left-0 -bottom-5 hidden" />
      </NavLink>

      <NavLink
        to={`${basePath}/structure`}
        className={`${linkBase} ${hoverBg} ${hoverText} md:hover:border-transparent md:px-0 md:pr-20`}
      >
        <p className="pl-6 text-sm hidden md:block">02</p>
        <p>STRUCTURE</p>
        <span className="absolute h-1 w-full left-0 -bottom-5 hidden" />
      </NavLink>

      <NavLink
        to={`${basePath}/surface`}
        className={`${linkBase} ${hoverBg} ${hoverText} md:hover:border-transparent md:py-3 md:px-0 md:pr-20`}
      >
        <p className="pl-6 text-sm hidden md:block">03</p>
        <p>SURFACE</p>
        <span className="absolute h-1 w-full left-0 -bottom-5 hidden" />
      </NavLink>
    </div>
  );
}
