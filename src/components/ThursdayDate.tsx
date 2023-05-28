import React from "react";
import { thursAfterFood, thursFood } from "../optionsExports";
import { SentenceBlock } from "./SentenceBlock";

export const ThursdayDate = () => {
  return (
    <div className="row">
      <div className="row">
        <SentenceBlock options={thursFood} />
      </div>
      <div className="row">
        <SentenceBlock options={thursAfterFood} />
      </div>
    </div>
  );
};
