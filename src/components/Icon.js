import React from "react";
import T from "prop-types";
import { iconsConfig } from "../utils/iconsConfig";
import "../style.css";

export const Icon = ({ name="", ...props }) => {
  const IconC = iconsConfig[name];
  return <IconC {...props} />;
};
