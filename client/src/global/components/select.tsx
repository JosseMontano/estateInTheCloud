import ParamsTypeRealEstate from "@/global/interfaces/typeRealEstate";

interface v {
  v: ParamsTypeRealEstate;
}

const Select = ({ v }: v) => {
  return <option value={v.name}>{v.name}</option>;
};

export default Select;
