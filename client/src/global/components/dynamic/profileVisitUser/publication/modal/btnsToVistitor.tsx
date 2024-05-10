import { Btn } from "@/global/styles/btn";
import { ShowInfo } from "../types/showInfo";
import { useLanguage } from "@/global/context/languageContext";

interface Props {
  showMoreInfo: ShowInfo;
  handleShowMoreInfo: (val: ShowInfo) => void;
  textBtn: string;
}
const BtnsToVisitor = ({
  showMoreInfo,
  handleShowMoreInfo,
  textBtn,
}: Props) => {
  const { text } = useLanguage();
  return (
    <>
      <Btn marginInElements="0px">{textBtn}</Btn>
      {showMoreInfo == "General" && (
        <Btn
          marginInElements="0px"
          onClick={() => handleShowMoreInfo("Specific")}
        >
          {text.visitUserShowMoreInfo}
        </Btn>
      )}
      {showMoreInfo == "Specific" && (
        <>
          <Btn
            marginInElements="0px"
            onClick={() => handleShowMoreInfo("General")}
          >
            {text.visitUserShowLessInfo}
          </Btn>
          <Btn
            marginInElements="0px"
            onClick={() => handleShowMoreInfo("Near places")}
          >
            Lugares cercanos
          </Btn>
        </>
      )}

      {showMoreInfo == "Near places" && (
        <>
          <Btn
            marginInElements="0px"
            onClick={() => handleShowMoreInfo("General")}
          >
            {text.visitUserShowLessInfo}
          </Btn>
        </>
      )}
    </>
  );
};

export default BtnsToVisitor;
