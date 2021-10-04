import React from "react";
import { useHistory } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  CardActionArea,
  makeStyles,
  Tooltip,
} from "@material-ui/core";
import StarRatings from "react-star-ratings";

const useStyles = makeStyles(() => ({
  gridStyle: {
    display: "flex",
  },
  cardStyle: {
    width: "25vh",
    padding: "12px",
    backgroundColor: "black",
  },
}));
function CategoryPage({ name, data }) {
  let history = useHistory();
  const classes = useStyles();
  const mainData = data.filter((x) => {
    return x.genres.includes(name);
  });

  const showNextPage = (dataObj) => {
    history.push({ pathname: `/infoPage/${dataObj.slug}`, state: dataObj });
  };
  return (
    <Grid>
      <Grid>
        <h2 style={{ color: "white" }}>{name}</h2>
      </Grid>
      <Grid className={classes.gridStyle}>
        {mainData.map((item) => (
          <Tooltip arrow title={item.director}>
            <CardActionArea
              style={{ width: "220px", padding: "10px" }}
              onClick={() => showNextPage(item)}
            >
              <Card className={classes.cardStyle}>
                {" "}
                <CardMedia component="img" image={item.poster} />
                <CardContent>
                  <StarRatings
                    rating={item.imdb_rating / 2}
                    starRatedColor="orange"
                    numberOfStars={5}
                    starDimension="10px"
                    name="rating"
                  />
                </CardContent>
              </Card>
            </CardActionArea>
          </Tooltip>
        ))}
      </Grid>
    </Grid>
  );
}

export default CategoryPage;
