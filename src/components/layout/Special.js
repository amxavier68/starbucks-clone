import React from "react";
import { Link } from "react-router-dom";

import ImgC from "../../../public/img/box-c.png";

const Special = () => {
  return (
    <section className="box box-c bg-secondary grid-col-2 grid-reversed">
      <img src={ImgC} alt="Christmas" />
      <div className="box-text">
        <h2 className="text-xl">Merry moment</h2>
        <p className="text-md">
          Treat yourself to a festive Sugar Plum Cheese Danish with a nicely
          spiced sugar-plum spread.
        </p>
        <button className="btn btn-light-outline">
          <Link to="/">Order now</Link>
        </button>
      </div>
    </section>
  );
};

export default Special;
