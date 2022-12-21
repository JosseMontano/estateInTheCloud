import styled from "styled-components";
import { useLanguage } from "context/languageContext";
const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;
const SearchTerm = styled.input`
  width: 100%;
  border: 3px solid #0299ad;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;
  margin: 15px 0px 15px 10px;
  &:focus {
    color: #027685;
  }
`;
const SearchButton = styled.button`
  width: 40px;
  height: 33px;
  border: 1px solid #027685;
  background: #027685;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
  margin: 15px 10px 15px 0px;
`;

interface Params {
  getValueSearch: (e: string) => void;
}

const Search = ({ getValueSearch }: Params) => {
  const {text} = useLanguage();
  return (
    <Container className="search">
      <SearchTerm
        onChange={(e) => getValueSearch(e.target.value)}
        type="text"
        placeholder={text.filterSearch}
      />
      <SearchButton type="submit">🔎</SearchButton>
    </Container>
  );
};

export default Search;
