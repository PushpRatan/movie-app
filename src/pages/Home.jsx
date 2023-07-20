import { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  InputBase,
} from "@mui/material";

//components
import Header from "../components/common/Header";
import { categoryMovies } from "../services/api";
import { nowPlaying, popular, topRated, upcoming } from "../constants/constant";
import SingleContent from "../components/card/singleContent";

let API_Key = "?api_key=60128e678dbba711c28e6e384e625e89&language=en-US";
let base_url = "https://api.themoviedb.org/3/";
let url = base_url + "movie/upcoming" + API_Key;

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

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [url_set, setUrl] = useState(url);
  const [search, setSearch] = useState();

  useEffect(() => {
    setUrl(url);
  }, []);

  useEffect(() => {
    fetch(url_set)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [url_set]);

  const homeUrl = () => {
    url = base_url + "movie/upcoming" + API_Key;
    setUrl(url);
  };

  const searchMovie = (searchText) => {
    url =
      base_url +
      "/search/movie?api_key=60128e678dbba711c28e6e384e625e89&query=" +
      searchText;
    setUrl(url);
  };

  return (
    <>
      <Header searchMovie={searchMovie} homeUrl={homeUrl} />
      <StyledToolBar>
        <Typography>Trending Movies</Typography>
        <Box className="home">
          {movies &&
            movies.map((c) => {
              return (
                <SingleContent
                  key={c.id}
                  id={c.id}
                  poster={c.poster_path}
                  title={c.title || c.name}
                  date={c.first_air_date || c.release_date}
                  media_type={c.media_type}
                  vote_average={c.vote_average}
                />
              );
            })}
        </Box>
      </StyledToolBar>
    </>
  );
};

export default Home;
