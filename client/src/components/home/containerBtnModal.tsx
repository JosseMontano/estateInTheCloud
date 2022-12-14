import { Btn } from "@/styles/btn";
import Clipboard from "../global/clipBoard";

import { RealEstate } from "@/interface/realEstate";

interface btnJSXType {
  click: () => void;
  txt: string;
}
interface Params {
  v: RealEstate;
  btnJSX: btnJSXType[];
}

const ContainerBtnModal = ({ v, btnJSX }: Params) => {
  return (
    <>
      <Clipboard txt={v.description} />
      {btnJSX.map((val, i) => (
        <Btn key={i} marginInElements="10px" onClick={val.click}>
          {val.txt}
        </Btn>
      ))}
    </>
  );
};

export default ContainerBtnModal;
