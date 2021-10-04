import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./styleMui";
import CategoryPage from "./CategoryPage";
import getMoviesByGenre from "../Action";
import NavBar from "../Navbar";
import { useHistory } from "react-router";

function Main({ classes }) {
  console.log('firing');
  const [searchText, setsearchText] = useState("");
  const dispatch = useDispatch();
  let history = useHistory();
  const data = useSelector((state) => state.movieReducer.moviesCollection);

  const handleNavigation = () => {
    const userName = localStorage.getItem("userName");
    const password = localStorage.getItem("password");
    if (userName === "" && password === "") {
      history.push("");
    }
  };
  useEffect(() => {
    handleNavigation()
    dispatch(getMoviesByGenre());
   return()=>{
    handleNavigation()
   }
  }, []);

 

  const handleSearch = (e) => {
    const { value } = e.target;
    setsearchText(value);
  };

  const filteredList = () => {
    let updatedList = [];
    if (searchText) {
      updatedList = data.filter((x) => {
        return x.title.toLowerCase() === searchText.toLowerCase();
      });
    }
    const filteredData = updatedList.length ? updatedList : data;
    return filteredData;
  };

  let genreArray = [];
  filteredList().forEach((item) => {
    item.genres.map((x) => {
      return genreArray.push(x);
    });
  });
  const uniqueArray = Array.from(new Set(genreArray));
  return (
    <div>
      <NavBar />
      <Grid className={classes.topStyle}>
        <h1 style={{ margin: "20px" }}>
          WOOKIE<br></br> MOVIES{" "}
        </h1>
        <SearchIcon className={classes.searchStyle} />
        <TextField
          variant="outlined"
          placeholder="Search movies by title"
          className={classes.textStyle}
          size="small"
          onChange={handleSearch}
        />
      </Grid>
      <div style={{ overflowY: "auto", height: "70vh" }}>
        {uniqueArray.map((item) => (
          <Grid className={classes.bottomStyle}>
            <CategoryPage name={item} data={filteredList()} />
          </Grid>
        ))}
      </div>
    </div>
  );
}
export default withStyles(styles)(Main);
