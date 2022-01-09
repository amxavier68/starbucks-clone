import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="box box-a bg-primary text-center py-md">
      <div className="box-inner">
        <h2 className="text-xl">Jingle all the way to free favorites</h2>
        <p className="text-md">
          Join Starbucks&reg; Rewards for delicious deals &amp; exclusive
          offers. <Link to="/">Learn more</Link>
        </p>
      </div>
    </section>
  );
};

export default Header;
