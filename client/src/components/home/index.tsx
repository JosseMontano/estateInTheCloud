import Slider from "../home/content";
import { RealEstate } from "@/interface/realEstate";
interface Params {
  dataComplete: { title: string; data: RealEstate[] }[];
  visitUser: (idUser: number, email: string) => void;
}
const index = ({ dataComplete, visitUser }: Params) => {
  return (
    <>
      {dataComplete.map((v, i) => (
        <div key={i}>
          <Slider {...v} visitUser={visitUser}  />
        </div>
      ))}
    </>
  );
};

export default index;
