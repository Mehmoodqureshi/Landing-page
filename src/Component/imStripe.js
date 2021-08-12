import { makeStyles } from "@material-ui/core";
import zIndex from "@material-ui/core/styles/zIndex";
import React from "react";
const useStyles = makeStyles((theme) => ({
  divStyle: {
    backgroundColor: "green",
    borderRadius: "5%",
    width: "80%",
    marginLeft: "10%",
    marginTop: "-10%",
  },
}));
export default function Stripe() {
  const classes = useStyles();
  return (
    <div className={classes.divStyle}>
      <h1
        style={{
          fontSize: "20px",
          zIndex: -1,
          position: "absolute",
          backgroundColor: "green",
          width: "20%",
        }}
      >
        Stripe
      </h1>
    </div>
  );
}
