import React from "react";
import { thursFood } from "../optionsExports";
import { SentenceBlock } from "./SentenceBlock";

export const ThursdayDate = () => {
  return (
    <div className="row m-2">
      <SentenceBlock options={thursFood} />
    </div>
  );
};
