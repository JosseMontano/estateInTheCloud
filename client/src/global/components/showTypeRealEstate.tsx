import { Label } from "jz-validation-form";
import SelectCom from "./select";
import { useLanguage } from "@/context/languageContext";
import Event from "@/global/interfaces/event";
import { getTypeRealEstate } from "@/services/realEstate";
import useLoadData from "@/global/hooks/useFetch";
import ParamsTypeRealEstate from "@/global/interfaces/typeRealEstate";
import styled from "styled-components";

interface Params {
  handleChange: (e: Event["inputChange"]) => void;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const Select = styled.select`
  display: block;
  padding: 10px;
  background: #f9fafd;
  border: none;
  margin-top: 5px;
  width: 100%;
  text-align: center;
`;

const ShowTypeRealEstate = ({ handleChange }: Params) => {
  const { data } = useLoadData<ParamsTypeRealEstate>(getTypeRealEstate);
  const { text } = useLanguage();
  return (
    <Container>
      <Label>{text.createPublicationType}</Label>
      <Select
        defaultValue={"DEFAULT"}
        name={"id_type"}
        onChange={(e) => handleChange(e)}
      >
        <option value={"DEFAULT"} disabled>
          -- Choose option --
        </option>
        {data.map((v, i) => (
          <SelectCom key={i} v={v} />
        ))}
      </Select>
    </Container>
  );
};

export default ShowTypeRealEstate;
