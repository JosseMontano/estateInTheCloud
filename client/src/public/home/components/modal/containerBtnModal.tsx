import { Btn } from "@/global/styles/btn";
import Clipboard from "@/global/components/copyText";
import { RealEstate } from "@/global/interfaces/realEstate";

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
      <Clipboard
        email={v.email}
        idUser={v.id_user}
        realeEstate={v.id_real_estate}
      />
      {btnJSX.map((val, i) => (
        <Btn key={i} marginInElements="10px" onClick={val.click}>
          {val.txt}
        </Btn>
      ))}
    </>
  );
};

export default ContainerBtnModal;
