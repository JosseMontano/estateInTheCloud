import styled from "styled-components";
import { useLanguage } from "@/global/context/languageContext";
import SearchIcon from "@/global/assets/icons/search";

const Container = styled.div`
  position: relative;
  display: flex;
`;

const SearchTerm = styled.input`
  width: 400px;
  border: 3px solid ColorText;
  border: none;
  border-radius: 30px;
  padding: 5px;
  height: 35px;
  outline: none;
  color: #9dbfaf;
  padding-left: 30px;
  &:focus {
    color: #000;
  }
`;

const SearchIconStyled = styled.div`
  position: absolute;
  width: 20px;
  left: 15px; // Adjust as needed
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Params {
  getValueSearch: (e: string) => void;
}

const Search = ({ getValueSearch }: Params) => {
  const { text } = useLanguage();
  return (
    <Container>
      <SearchTerm
        onChange={(e) => getValueSearch(e.target.value)}
        type="text"
        placeholder={text.filterSearch}
      />
      <SearchIconStyled>
        <SearchIcon />
      </SearchIconStyled>
    </Container>
  );
};

export default Search;
