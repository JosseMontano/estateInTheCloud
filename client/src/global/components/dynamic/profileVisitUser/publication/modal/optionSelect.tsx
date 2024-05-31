import { useEffect, useState } from "react";
import { translateToSpanish } from "@/public/home/utilities/translate";

interface Props {
  type: string;
}
const OptionSelect = ({ type }: Props) => {
 

  return <option value={type}>{type}</option>;
};

export default OptionSelect;
