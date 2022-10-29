import Slider from "../home/content";
import { RealEstate } from "../../interface/realEstate";

interface Params {
  dataComplete: { title: string; data: RealEstate[] }[];
}
const index = ({ dataComplete }: Params) => {
  return (
    <>
      {dataComplete.map((v, i) => (
        <div key={i}>
          <Slider {...v} />
        </div>
      ))}
    </>
  );
};

export default index;
