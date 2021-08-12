import { Grid, makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import banner from "../Images/banner-img.jpg";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  img: {
    backgroundImage: `url(${banner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "right",
    // width: "300%",
    height: "100vh",
  },
  btn: {
    backgroundColor: "#fb711f",
    border: "2px solid #fb711f",
    fontSize: "15px",
    letterSpacing: "0.5px",
    padding: "16px 28px",
    transition: " all 0.5s",
    color: "#fff",
    borderRadius: "10px",
    display: "inline-block",
    cursor: "pointer",
    marginLeft: "-43%",
    marginBottom: "15%",
  },
  far: {
    // fontWeight: "900",
    // marginLeft: "1rem!important",
    // display: "flex",
    // justifyContent: "center",
    // marginLeft: "-40%",
    // marginBottom: "-25%",
  },
}));

const Step1 = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={1} className={classes.img}>
      <Grid item xs={8} className={classes.far}>
        <h2
          style={{
            fontSize: "40px",
            color: "#222 !important",
            textShadow: " none",
            fontWeight: 600,
            lineHeight: "50px",
            textTransform: " capitalize",
            paddingBottom: "12px",
            marginBottom: " 0px",
            width: "45%",
            textAlign: "left",
            marginLeft: "15%",
            marginTop: "20%",
          }}
        >
          Do You Qualify For A Free Grant?
        </h2>
        <p
          style={{
            marginTop: 1,
            textAlign: "left",
            fontSize: "20px",
            width: "40%",
            marginLeft: "15%",
          }}
        >
          Start the eligibility checker to find out in just a few minutes.
        </p>
      </Grid>
      <Grid item xs={8}>
        <Button
          className={classes.btn}
          endIcon={
            <i
              style={{ fontWeight: 900 }}
              class="fa fa-chevron-circle-right"
              aria-hidden="true"
            >
              <ArrowForwardIosIcon style={{ marginBottom: "-18%" }} />
            </i>
          }
        >
          Check If You Qualify
        </Button>
      </Grid>
    </Grid>
  );
};

export default Step1;
