import { useLanguage } from "@/global/context/languageContext";
import { RealEstate } from "@/global/interfaces/realEstate";
import { H2, P } from "@/global/styles/modal/perfil";

interface Props {
  v: RealEstate;
}
const MoreInfo = ({ v }: Props) => {
  const { text } = useLanguage();
  return (
    <div>
      <P>
        {text.visitUseramount_bedroom}
        {v.amount_bedroom}
      </P>
      <P>
        {text.visitUserprice}
        {v.price}
      </P>

      <P>
        {text.visitUseramount_bathroom}
        {v.amount_bathroom}
      </P>

      <P>
        {text.visitUsersquare_meter}
        {v.square_meter}
      </P>

      <P>
        {text.visitUserprice}
        {v.price}
      </P>

      {/*   <P>
      {text.visitUserlat_long}
      {p.v.lat_long}
    </P> */}

      <P>
        {text.visitUseraddress}
        {v.address}
      </P>
    </div>
  );
};

export default MoreInfo;
