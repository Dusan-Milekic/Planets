import React from "react";
import icon_hamburger from "../assets/icon-hamburger.svg";
export default class extends React.Component {
  constructor(params) {
    super(params);
  }
  render() {
    return (
      <>
        <div className="header flex justify-between items-center border-b-1 border-gray-500 px-8 py-5">
          <div className="heading">
            <h1 className="text-3xl">THE PLANETS</h1>
          </div>
          <div className="hamburger">
            <img src={icon_hamburger} alt="hamburger" />
          </div>
        </div>
      </>
    );
  }
}
