import React, { createRef } from "react";
import icon_hamburger from "../assets/icon-hamburger.svg";
import cheveron from "../assets/icon-chevron.svg";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbar: false,
    };
    this.navbarRef = createRef();
    this.headerRef = createRef();
  }

  setNavigation = () => {
    if (this.navbarRef.current) {
      this.setState({ navbar: !this.state.navbar }, () => {
        if (this.state.navbar) {
          this.navbarRef.current.classList.remove("hidden");
        } else {
          this.navbarRef.current.classList.add("hidden");
        }
      });
    }
  };

  render() {
    return (
      <>
        <div className="header flex justify-between items-center border-b-1 border-gray-500 px-8 py-5 ">
          <div className="heading">
            <h1 className="text-3xl">THE PLANETS</h1>
          </div>
          <div className="hamburger">
            <img
              src={icon_hamburger}
              alt="hamburger"
              onClick={this.setNavigation}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div
          className="navigation-planets absolute w-full h-full z-40 bg-[#070724] hidden"
          ref={this.navbarRef}
        >
          <nav>
            <ul>
              <li className="flex items-center justify-between px-5 py-4 cursor-pointer border-gray-500 border-b">
                <a href="/mercury" className="text-lg">
                  MERCURY
                </a>
                <img src={cheveron} alt="cheveron" className="w-3 h-4" />
              </li>

              <li className="flex items-center justify-between px-5 py-4 cursor-pointer border-gray-500 border-b">
                <a href="/venus" className="text-lg">
                  VENUS
                </a>
                <img src={cheveron} alt="cheveron" className="w-3 h-4" />
              </li>

              <li className="flex items-center justify-between px-5 py-4 cursor-pointer border-gray-500 border-b">
                <a href="/earth" className="text-lg">
                  EARTH
                </a>
                <img src={cheveron} alt="cheveron" className="w-3 h-4" />
              </li>

              <li className="flex items-center justify-between px-5 py-4 cursor-pointer border-gray-500 border-b">
                <a href="/mars" className="text-lg">
                  MARS
                </a>
                <img src={cheveron} alt="cheveron" className="w-3 h-4" />
              </li>

              <li className="flex items-center justify-between px-5 py-4 cursor-pointer border-gray-500 border-b">
                <a href="/jupiter" className="text-lg">
                  JUPITER
                </a>
                <img src={cheveron} alt="cheveron" className="w-3 h-4" />
              </li>

              <li className="flex items-center justify-between px-5 py-4 cursor-pointer border-gray-500 border-b">
                <a href="/saturn" className="text-lg">
                  SATURN
                </a>
                <img src={cheveron} alt="cheveron" className="w-3 h-4" />
              </li>

              <li className="flex items-center justify-between px-5 py-4 cursor-pointer border-gray-500 border-b">
                <a href="/uranus" className="text-lg">
                  URANUS
                </a>
                <img src={cheveron} alt="cheveron" className="w-3 h-4" />
              </li>

              <li className="flex items-center justify-between px-5 py-4 cursor-pointer">
                <a href="/neptune" className="text-lg">
                  NEPTUNE
                </a>
                <img src={cheveron} alt="cheveron" className="w-3 h-4" />
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
}
