import ParamsTypeRealEstate from "@/interface/typeRealEstate";

interface v {
  v: ParamsTypeRealEstate;
}

const Select = ({ v }: v) => {
  return <option value={v.id}>{v.name_type}</option>;
};

export default Select;
