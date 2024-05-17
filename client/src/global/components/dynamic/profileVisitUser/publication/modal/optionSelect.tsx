import { useEffect, useState } from "react";
import { translateToSpanish } from "@/public/home/utilities/translate";

interface Props {
  type: string;
}
const OptionSelect = ({  type }: Props) => {
  const [text, setText] = useState("");

  const handleChangeText = async () => {
    const res = await translateToSpanish(type);
    if (res) setText(res);
  };

  useEffect(() => {
    handleChangeText();
  }, []);

  return (
    <option value={type}>
      {text}
    </option>
  );
};

export default OptionSelect;
