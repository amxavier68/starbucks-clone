import React from "react";
import { Link } from "react-router-dom";

import Imgf2 from "../../../public/img/box-f2.jpg";

const Media = () => {
  return (
    <>
      <img src={Imgf2} alt="Media" />
      <div className="bg-primary py-lg">
        <div className="box-text">
          <h2 className="text-md">Loved Passing on Netflix?</h2>
          <p className="text-sm">
            Our new social series about film adaptations kicks off with the
            actors and directors who brought the book to life.
          </p>
          <button className="btn btn-light-outline">
            <Link to="/">Order now</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Media;
