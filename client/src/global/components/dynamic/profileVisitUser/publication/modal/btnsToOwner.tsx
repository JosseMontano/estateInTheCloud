import { InputFile } from "@/global/styles/globals";
import { ContainerBtn } from "@/global/styles/modal/perfil";
import { Btn } from "@/global/styles/btn";
import { useLanguage } from "@/global/context/languageContext";

type btnJSXType = {
  click: () => void;
  txt: string;
}[];

interface Props {
  btnJSX: btnJSXType;
  handleUpdateStateRE: () => void;
  stateAvailable: boolean;
  handleFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const BtnsToOwner = ({
  btnJSX,
  handleUpdateStateRE,
  stateAvailable,
  handleFile,
}: Props) => {
  const { text } = useLanguage();
  return (
    <>
      <InputFile type="file" onChange={(e) => handleFile(e)} />
      <ContainerBtn>
        {btnJSX.map((v, i) => (
          <Btn key={i} marginInElements="0px" onClick={v.click}>
            {v.txt}
          </Btn>
        ))}
        <Btn marginInElements="0px" onClick={handleUpdateStateRE}>
          {stateAvailable
            ? text.profileBtnAvailable
            : text.profileBtnNoAvailable}
        </Btn>
      </ContainerBtn>
    </>
  );
};

export default BtnsToOwner;
