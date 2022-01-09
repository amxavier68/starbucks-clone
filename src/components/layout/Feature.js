import React from "react";
import { Link } from "react-router-dom";

import ImgB from "../../../public/img/box-b.png";

const Feature = () => {
  return (
    <section className="box box-b bg-secondary grid-col-2">
      <img src={ImgB} alt="New Feature" />
      <div className="box-text">
        <h2 className="text-xl">New to the nice list</h2>
        <p className="text-md">
          For a nondairy twist on a holiday cookie classic, try the new Iced
          Sugar Cookie Almondmilk Latte.
        </p>
        <button className="btn btn-light-outline">
          <Link to="/">Order now</Link>
        </button>
      </div>
    </section>
  );
};

export default Feature;
