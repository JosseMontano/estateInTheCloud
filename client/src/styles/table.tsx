import styled from "styled-components";

export const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  text-align: center;
  color:#fff;
  & td,
  & th {
    border: 1px solid #ddd;
    padding: 8px;
  }
  & tr:nth-child(even) {
    background-color: #c1c1c1;
  }

  & tr:hover {
    background-color: #ddd;
    color:#000;
  }

  & th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #02734a;
    color: white;
  }
`;