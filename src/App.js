import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import img from "./images/bg-header-desktop.svg";
import { fetchP } from "./helpers/fetch";
import { Box, Grid } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#F0FAFB",
  },
  root: {
    minWidth: 275,
    border: 20,
    marginLeft: 100,
    marginRight: 80,
    marginTop: 25,
    marginBottom: 25,
    flexGrow: 1,
  },
  media: {
    height: "20%",
    width: "100%",
    marginTop: 0,
    backgroundColor: "#5EA4A6",
  },
  company: {
    color: "#5EA4A6",
    fontFamily: ["Spartan", " sans-serif"].join(","),
    fontSize: "15px",
    fontWeight: "bolder",
  },
  position: {
    fontFamily: ["Spartan", "sans-serif"].join(","),
    fontSize: "20px",
    fontWeight: "bolder",
  },
  postedAt: {
    fontFamily: ["Spartan", "sans-serif"].join(","),
    fontSize: "15px",
    color: "#646464",
    margin: 8,
  },
  containerLanguage: {
    alignItems: "end",
  },
  language: {
    backgroundColor: "#D6EBED",
    fontFamily: ["Spartan", "sans-serif"].join(","),
    color: "#5EA4A6",
    fontWeight: "bolder",
    fontSize: "10px",
    margin: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export const App = () => {
  const [data, saveData] = useState([]);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  useEffect(() => {
    traerData().then((res) => {
      console.log(data);
    });
  }, []);

  const traerData = async () => {
    const resp = await fetchP();
    const body = await resp.json();
    saveData(body);
  };

  return (
    <div className={classes.container}>
      <img className={classes.media} src={img} alt="Logo" />

      {data.map((dat, key) => {
        console.log(dat);
        return (
          <div>
            {data.map((dat, key) => {
              return (
                <Card key={key} className={classes.root} variant="elevation">
                  <Grid container spacing={2}>
                    <Grid item xs={2}>
                      <img className={classes.media} alt="img" src={img} />
                    </Grid>

                    <Grid item xs={10} sm={6}>
                      <Box display="flex" flexDirection="row">
                        <div>
                          <p className={classes.company}>{dat.company}</p>
                          <p className={classes.position}>{dat.position}</p>

                          <Box display="flex" flexDirection="row">
                            <p className={classes.postedAt}>{dat.postedAt}</p>
                            <p className={classes.postedAt}>•</p>
                            <p className={classes.postedAt}>{dat.contract}</p>
                            <p className={classes.postedAt}>•</p>
                            <p className={classes.postedAt}>{dat.location}</p>
                          </Box>
                        </div>

                        <div justifyContent="flex-end">
                          <Box
                            className={classes.containerLanguage}
                            display="flex"
                            flexDirection="row"
                          >
                            {dat.languages.map((dats, keyb) => {
                              return (
                                <div className={classes.language} key={keyb}>
                                  <p>{dats}</p>
                                </div>
                              );
                            })}
                          </Box>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Card>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
