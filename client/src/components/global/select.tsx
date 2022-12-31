import ParamsTypeRealEstate from "@/interfaces/typeRealEstate";

interface v {
  v: ParamsTypeRealEstate;
}

const Select = ({ v }: v) => {
  return <option value={v.id}>{v.name_type}</option>;
};

export default Select;
