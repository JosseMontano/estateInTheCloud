import { ColorText, ErrorCss, Input, Label } from "../../styles/globals";

interface V {
  label: string;
  name: string;
  value: any;
  errors: any;
  placeHolder: string;
}

interface Params {
  v: V;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const ContentFormRegister = ({ v, handleChange }: Params) => {
  return (
    <>
      <Label colorText={ColorText}>{v.label}</Label>
      <Input
        type="text"
        name={v.name}
        onChange={handleChange}
        value={v.value}
        placeholder={v.placeHolder}
        required
      />
      {v.errors && <ErrorCss>{v.errors}</ErrorCss>}
    </>
  );
};

export default ContentFormRegister;
