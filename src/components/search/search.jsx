import { useEffect, useState } from "react";
import { InputBase, styled, Box, Typography, Toolbar } from "@mui/material";
import axios from "axios";

import "./search.css";
import SingleContent from "../card/singleContent";
import Header from "../common/Header";
import { HandymanOutlined } from "@mui/icons-material";
import searchMovie from "../../pages/Home";

const StyledToolBar = styled(Toolbar)`
  background: white;
  max-width: 1360px;
  margin: auto;
  display: block;
  padding-top: 100px;

  min-height: 56px !important;
  justify-content: center;
  & > p {
    font-size: 50px;
    color: black;
    text-align: center;
    padding-bottom: 50px;
  }

  & > div {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }
`;

const InputSearchField = styled(InputBase)`
  background: #fff;
  height: 30px;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
`;

const Search = ({ searchMovie }) => {
  const [searchText, setsearchText] = useState("");

  const handleKeyDown = (evt) => {
    if (evt.key === "Enter") {
      searchMovie(searchText);
    }
  };

  return (
    <>
      <div className="main">
        <InputSearchField
          placeholder={"Search"}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
};

export default Search;
