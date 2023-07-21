import React from "react";
import Bathroom from "../component/Bathroom";
import Citys from "../pages/Citys";
export default function layout() {
  return (
    <>
      <div>
        <Bathroom />
      </div>
      <div>
        <Citys />
      </div>
    </>
  );
}
