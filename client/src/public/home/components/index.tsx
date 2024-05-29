import { useNameUser } from "@/global/context/nameUserContext";
import { FavsPostType } from "../interfaces/favs";
import Slider from "./content";
import { postFavs } from "../services/favs";
import Toast from "@/global/components/toast/message";
import { useState } from "react";
import { useLanguage } from "@/global/context/languageContext";
import { dataTypeEnum } from "../interfaces/dataTypeEnum";
import { dataCompleteType } from "../interfaces/dataCompleteType";
import { BtnsDataType } from "../interfaces/btnsDataType";

interface Params {
  dataComplete: dataCompleteType[];
  visitUser: (idUser: number, email: string) => void;
  dataTypeState: dataTypeEnum;
  btnsDataType: BtnsDataType[];
  handleDataTypeState: (dataType: dataTypeEnum) => void;
}

const index = ({
  dataComplete,
  visitUser,
  dataTypeState,
  btnsDataType,
  handleDataTypeState,
}: Params) => {
  const { idUser } = useNameUser();
  const { text } = useLanguage();

  const [saveFav, setSaveFav] = useState(false);

  const addFavorite = async (realEstateId: number) => {
    const objFav: FavsPostType = {
      real_estate_id: realEstateId.toString(),
      user_id: idUser.toString(),
    };
    const res = await postFavs(objFav);
    if (res) {
      setSaveFav(true);
      setTimeout(() => {
        setSaveFav(false);
      }, 2000);
    }
  };

  function showSlider(v: dataCompleteType, i: number) {
    return (
      <div key={i}>
        <Slider
          {...v}
          visitUser={visitUser}
          addFavorite={addFavorite}
          dataTypeState={dataTypeState}
        />
      </div>
    );
  }

  return (
    <>
      {dataComplete
        .filter((x) => x.dataType == dataTypeState)
        .map((v, i) => showSlider(v, i))}
      {saveFav && <Toast msg={text.msgFavorites} />}
    </>
  );
};

export default index;
