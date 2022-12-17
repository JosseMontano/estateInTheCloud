import REOnePublicationType from "@/interface/realEstateOfOnePublication";
import ImgCom from "../modal/img";

export default function DataImg(data: REOnePublicationType[]) {
  return data.map((va, i) => <ImgCom {...(va as object)} key={i} />);
}
