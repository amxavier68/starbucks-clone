import React from "react";

import Delivery from "./Delivery";
import Media from "./Media";

const DeliveryMedia = () => {
  return (
    <section className="box box-f grid-col-2">
      <div>
        <Delivery />
      </div>
      <div>
        <Media />
      </div>
    </section>
  );
};

export default DeliveryMedia;
