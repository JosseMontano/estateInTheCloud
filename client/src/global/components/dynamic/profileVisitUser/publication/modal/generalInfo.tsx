import { H2, P } from "@/global/styles/modal/perfil";

interface Props {
  title: string;
  description: string;
}
const GeneralInfo = ({ description, title }: Props) => {
  return (
    <>
      <H2>{title}</H2>
      <P>{description}</P>
    </>
  );
};

export default GeneralInfo;
