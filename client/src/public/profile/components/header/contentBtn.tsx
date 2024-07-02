import styled from "styled-components";
import { marginInElements } from "@/global/styles/globals";
import { Btn } from "@/global/styles/btn";
import { useLanguage } from "@/global/context/languageContext";
import { useNameUser } from "@/global/context/nameUserContext";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
  }
  & button {
    max-width: 120px;
  }
`;
const SPAN = styled.span`
  align-self: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

interface Params {
  toggle: () => void;
  isShown: boolean;
  handleShowFav: () => void;
  showFav: boolean;
  handleDashboard: () => void
  showDashboad: boolean
}

const ContentBtn = ({ toggle, isShown, handleShowFav, showFav, handleDashboard, showDashboad }: Params) => {
  const { nameUser, role } = useNameUser();
  const { text } = useLanguage();
  return (
    <Container>
      <SPAN>{nameUser}</SPAN>
      {/*  <Btn marginInElements={marginInElements}>{text.profileEditProfile}</Btn> */}
      <Btn onClick={toggle} marginInElements={marginInElements}>
        {isShown ? text.profileShowPublicate : text.profileCreatePublicate}
      </Btn>
      <Btn onClick={handleShowFav} marginInElements={marginInElements}>
        {showFav ? text.favoriteHideFavorites : text.fvoriteShowFavorites}
      </Btn>
      {role === 1 && (
        <Btn onClick={handleDashboard} marginInElements={marginInElements}>
          {showDashboad ? text.hideDashboardAdmin : text.showDashboardAdmin}
        </Btn>
      )}
    </Container>
  );
};

export default ContentBtn;
