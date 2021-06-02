import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import img from "../../images/bg-header-desktop.svg";
const useStyles = makeStyles({
    media: {
      height: "20%",
      width: "100%",
      marginTop: 0,
      backgroundColor: "#5EA4A6",
    }
  });
export const Header = () => {
    const classes = useStyles();
    return (
        <img className={classes.media} src={img} alt="Logo" />
    )
}
