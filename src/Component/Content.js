import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    // padding: "20px 0px 20px 100px",
    width: "100%",
    display: "grid",
    margin: "auto",
    position: "relative",
    backgroundColor: "#ca0202",
    padding: "30px 0px 20px",
    color: " #fff",
  },
}));

const Step8a = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.main}>
      <Grid item>
        <h2>Client Testimonals</h2>
        <p style={{ width: "50%", marginLeft: "25%" }}>{props.content}</p>
        <i
          style={{
            fontSize: "17px",
            color: "#fff",
            marginBottom: "30px",
            textAlign: " right",
            marginRight: "-40%",
          }}
        >
          -Desiner-
        </i>
      </Grid>
    </Grid>
    //
  );
};

export default Step8a;
