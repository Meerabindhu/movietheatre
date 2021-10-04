import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import data from "./dummyLogin.json";

function Login({ history }) {
  const [states, setStates] = useState({
    userName: "",
    password: "",
    errorMessage: "",
  });

  const { userName, password, errorMessage } = states;
  const handleChange = (event) => {
    const { name, value } = event.target || {};
    setStates((c) => ({
      ...c,
      [name]: value,
      errorMessage: "",
    }));
  };

  const handleNavigation = () => {
    const userName = localStorage.getItem("userName");
    const password = localStorage.getItem("password");
    if (userName === "" && password === "") {
      history.push("");
    }
  };

  useEffect(() => {
    handleNavigation();
    return () => {
      handleNavigation();
    };
  }, []);

  const handleClick = () => {
    if (userName === data.userName && password === data.password) {
      localStorage.setItem("userName", data.userName);
      localStorage.setItem("password", data.password);
      history.push("/menuPage");
    } else {
      setStates((c) => ({
        ...c,
        errorMessage: "Please enter valid username and password!",
      }));
    }
  };

  return (
    <div className={styles.rootStyle}>
      <div className={styles.cardStyle}>
        <div style={{ position: "absolute", top: "80px" }}>
          <Grid>
            <TextField
              style={{ paddingTop: "20px" }}
              placeholder="Enter your User Name"
              value={userName}
              name="userName"
              onChange={handleChange}
              id="outlined-required"
              variant="outlined"
              InputProps={{
                style: {
                    color: "#bee1da"
                }
            }}
            />
          </Grid>
          <Grid>
            <TextField
              style={{ paddingTop: "20px" }}
              type="password"
              placeholder="Enter your Password"
              onChange={handleChange}
              name="password"
              value={password}
              id="outlined-required"
              variant="outlined"
              InputProps={{
                style: {
                    color: "#bee1da"
                }
            }}
            />
          </Grid>
        </div>

        {errorMessage ? (
          <Typography
            color="secondary"
            style={{ fontSize: "12px", position: "absolute", top: "42vh" }}
          >
            {errorMessage}
          </Typography>
        ) : null}
        <Button
          style={{
            backgroundColor: "#168190",
            position: "absolute",
            top: "45vh",
          }}
          variant="contained"
          onClick={handleClick}
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
