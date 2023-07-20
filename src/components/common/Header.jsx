import { useState } from "react";

import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  InputBase,
} from "@mui/material";
import { Menu, Favorite } from "@mui/icons-material";

import { logoURL } from "../../constants/constant";

import HeaderMenu from "../HeaderMenu";
import Search from "../search/search";

const StyledToolBar = styled(Toolbar)`
  background: #111;
  min-widtg: 1360px;
  // position: relative;
  min-height: 56px !important;
  // padding: 0 310px !important;
  justify-content: center;
  & > * {
    padding: 16px;
  }
  & > div {
    display: flex;
    align-item: center;
    cursor: pointer;
    & > p {
      margin: auto 0;
      font-size: 14px;
      font-weight: 600;
    }
  }
  & > p {
    font-size: 14px;
    font-weight: 600;
  }

  @media (max-width: 450px) {
    p {
      display: none;
    }
  }
`;

const Logo = styled("img")({
  width: 64,
  cursor: "pointer",
});

const Header = ({ searchMovie, homeUrl }) => {
  const [open, setOpen] = useState(null);

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };
  const logoClick = (e) => {
    homeUrl();
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <AppBar>
      <StyledToolBar>
        <Logo src={logoURL} alt="logo" onClick={logoClick} />
        <Box onClick={handleClick}>
          <Menu />
          <Typography>Menu</Typography>
        </Box>
        <HeaderMenu open={open} handleClose={handleClose} />
        <Search searchMovie={searchMovie} />
        <Box>
          <Favorite />
          <Typography>Favorites</Typography>
        </Box>
      </StyledToolBar>
    </AppBar>
  );
};

export default Header;
