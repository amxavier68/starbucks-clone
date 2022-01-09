import React from "react";
import { Link } from "react-router-dom";

import ImgF1 from "../../../public/img/box-f1.jpg";

const Delivery = () => {
  return (
    <>
      <img src={ImgF1} alt="Delivery" />
      <div className="bg-extra py-lg">
        <div className="box-text">
          <h2 className="text-md">Let the holiday cheer come to you</h2>
          <p className="text-sm">
            Make the moment merry. Order Starbucks&reg; holiday favorites on
            Uber Eats.*
          </p>
          <button className="btn btn-light-outline">
            <Link to="/">Order now</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Delivery;
