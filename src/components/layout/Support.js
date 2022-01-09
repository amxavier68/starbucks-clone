import React from "react";
import { Link } from "react-router-dom";

import ImgE from "../../../public/img/box-e.jpg";

const Support = () => {
  return (
    <section className="box box-e bg-secondary grid-col-2 grid-reversed">
      <img src={ImgE} alt="Support" />
      <div className="box-text">
        <h2 className="text-md">Fighting hunger this holiday</h2>
        <p className="text-sm">
          Hunger is affecting millions of people across America this holiday
          season. Join us in our commitment to hunger relief and help feed
          neighbors in need.
        </p>
        <button className="btn btn-light-outline">
          <Link to="/">Order now</Link>
        </button>
      </div>
    </section>
  );
};

export default Support;
