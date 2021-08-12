import { Grid, makeStyles } from "@material-ui/core";
import svg1 from "../Images/svg1.svg";
import svg2 from "../Images/svg2.svg";
import svg3 from "../Images/svg3.svg";
import svg4 from "../Images/svg4.svg";

const useStyles = makeStyles((theme) => ({
  home: {
    backgroundColor: "#ff5603!important",
    padding: "1.5rem!important",
    display: "",
    justifyContent: "space-around",
  },
  textStyle: {
    margin: 0,
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: "122%",
    color: " #F5F6FA",
    marginLeft: "25%",
  },
  thirdImg: {},
}));
const Step2 = () => {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <Grid container row spacing={1}>
        <Grid item xs={3}>
          <img src={svg1} style={{ marginLeft: "33%" }} />
          <p className={classes.textStyle}>
            Free Government Grants For Homeowners
          </p>
        </Grid>
        <Grid item xs={3}>
          <img src={svg2} style={{ marginLeft: "33%" }} />
          <p className={classes.textStyle}>Nationwide Coverage</p>
        </Grid>
        <Grid item xs={3}>
          <img
            style={{
              marginLeft: "27%",
              margin: "-40px auto 0",
              maxWidth: "135px",
              marginTop: "5px",
              marginBottom: "20px",
            }}
            src={svg3}
          />
          <p className={classes.textStyle}>
            Accredited and Award Winning Service
          </p>
        </Grid>
        <Grid item xs={3}>
          <img src={svg4} style={{ marginLeft: "33%" }} />
          <p className={classes.textStyle}>
            Trusted & Highly Trained <br /> Installers
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Step2;
