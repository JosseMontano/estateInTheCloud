import { useNameUser } from "@/global/context/nameUserContext";
import { FavsPostType } from "../interfaces/favs";
import Slider from "./content";
import { RealEstate } from "@/global/interfaces/realEstate";
import { postFavs } from "../services/favs";
import Toast from "@/global/components/toast/message";
import { useState } from "react";
import { useLanguage } from "@/global/context/languageContext";

interface Params {
  dataComplete: { title: string; data: RealEstate[] }[];
  visitUser: (idUser: number, email: string) => void;
}

const index = ({ dataComplete, visitUser }: Params) => {
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
  return (
    <>
      {dataComplete.map((v, i) => (
        <div key={i}>
          <Slider {...v} visitUser={visitUser} addFavorite={addFavorite} />
        </div>
      ))}
      {saveFav && <Toast msg={text.msgFavorites} />}
    </>
  );
};

export default index;
