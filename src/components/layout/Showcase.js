import React from "react";
import { Link } from "react-router-dom";

import ImgD from "../../../public/img/box-d.png";

const Showcase = () => {
  return (
    <section className="box box-d bg-primary grid-col-2">
      <img src={ImgD} alt="Showcase" />
      <div className="box-text">
        <h2 className="text-xl">Starbucks Thanksgiving Blend</h2>
        <p className="text-md">
          This elegant dark roast returns, showcasing flavors from some of the
          world’s major coffee-growing regions.
        </p>
        <button className="btn btn-light-outline">
          <Link to="/">Order now</Link>
        </button>
      </div>
    </section>
  );
};

export default Showcase;
