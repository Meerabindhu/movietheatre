import { Card } from "@material-ui/core";
import { CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router";
import style from "./style.module.css";
import StarRatings from "react-star-ratings";
import dateFormat from "dateformat";
import NavBar from "../../Navbar";

function DetailsPage() {
  const location = useLocation();
  const { state } = location || {};
  const cardHeadings = ["Language", "Duration", "Age"];
  const cardContents = ["EN", state.length, state.classification];
  const date = dateFormat(state.released_on, "dS mmmm yyyy");
  return (
    <div>
      <NavBar />
      <div className={style.appStyle}>
        <div
          className={style.backgroundStyle}
          style={{ backgroundImage: "url(" + state.backdrop + ")" }}
        ></div>
        <div className={style.titleStyle}>
          <Typography style={{ fontSize: "20px", fontWeight: "700" }}>
            {state.title}
          </Typography>
          <Typography style={{ fontSize: "16px", fontWeight: "500" }}>
            {state.director}
          </Typography>
          <StarRatings
            rating={state.imdb_rating / 2}
            starRatedColor="orange"
            numberOfStars={5}
            starDimension="30px"
            name="rating"
          />
          <Typography style={{ fontSize: "13px", fontWeight: "400" }}>
            Release Date :{date}
          </Typography>
          <div style={{ display: "flex" }}>
            {state.genres.map((item) => (
              <div
                style={{
                  border: "2px solid black",
                  borderRadius: "10px",
                  margin: "5px",
                  textAlign: "center",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <Card className={style.posterStyle}>
          {" "}
          <CardMedia component="img" image={state.poster} />
          <CardContent style={{ backgroundColor: "black" }}>
            {cardHeadings.map((item, i) => (
              <table style={{ color: "white", fontSize: "14px" }}>
                <tr>
                  <td>{item}</td>
                  <td></td>
                  <td>{cardContents[i]}</td>
                </tr>
              </table>
            ))}
          </CardContent>
        </Card>

        <div className={style.bottomdivStyle}>
          <div className={style.rightStyle}>
            <h2>Synopsis</h2>
            <h4>{state.overview}</h4>
            <h4 style={{ color: "#8d9997" }}>Cast : {state.cast.join(", ")}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
