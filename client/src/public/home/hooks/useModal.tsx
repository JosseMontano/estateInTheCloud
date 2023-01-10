import { useNavigate } from "react-router-dom";


interface Params {
  idPhoto: number;
  idRealEstate: number;
}

const useModal = ({ idPhoto, idRealEstate }: Params) => {
  const navigate = useNavigate();

  const handleSeeQuestions = () => {
    navigate(`/answeQuestionInterested/${idRealEstate}`);
  };

  const handle360 = () => {
    navigate(`/img360/${idPhoto}`);
  };

  return {
    handleSeeQuestions,
    handle360,
  };
};

export default useModal;
