import ImgCom from "../modal/img";

export default function DataImg(data: never[]) {
  return data.map((va, i) => <ImgCom {...(va as object)} key={i} />);
}
