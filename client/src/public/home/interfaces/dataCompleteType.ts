import { RealEstate } from "@/global/interfaces/realEstate";
import { dataTypeEnum } from "./dataTypeEnum";

export type dataCompleteType = {
    title: string;
    data: RealEstate[];
    dataType: dataTypeEnum;
  };