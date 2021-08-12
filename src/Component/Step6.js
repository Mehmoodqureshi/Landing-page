import { Divider, Grid, makeStyles } from "@material-ui/core";
import eff22 from "../Images/eff22.jpeg";
import heatc from "../Images/heatc.jpeg";
import test from "../Images/test.jpeg";
import loft1 from "../Images/loft1.jpeg";
import under22 from "../Images/under22.jpeg";
import boiler22 from "../Images/boiler22.jpeg";
import heatcc from "../Images/heatcc.jpeg";
import doors from "../Images/doors.jpeg";
import shape from "../Images/shape.png";
const useStyles = makeStyles((theme) => ({
  main: {
    display: "grid",
    gridGap: "50px 100px",
    gridTemplateColumns: "auto auto auto auto",
    // backgroundColor: "#2196F3",
    padding: "10px",
  },
  inner: {
    // backgroundColor: " rgba(255, 255, 255, 0.8)",
    // border: "1px solid rgba(0, 0, 0, 0.8)",
    // padding: "20px",
    // fontSize: "30px",
    // textAlign: "center",
    // height: "226px",
    // width: "226px",
  },
  img: {
    borderRadius: "50%!important",
  },
}));

const Step6 = () => {
  const classes = useStyles();
  return (
    // <Grid container spacing={1} direction={"column"} className={classes.main}>\
    <>
      <Grid container direction="column">
        <Grid item>
          <a href="#" style={{ textDecoration: "none" }}>
            <h2
              style={{
                marginTop: "4%",
                color: "black",
                fontSize: "34px",
                lineHeight: 1.2,
              }}
            >
              Our Services
            </h2>
            <Divider
              style={{
                borderBottom: " 4px solid #ff5107",
                // padding: "10px 10px 15px 0px",
                height: "1%",
                width: "83%",
                background: "none",
                marginLeft: "12%",
                marginTop: "-2%",
              }}
            />
          </a>
        </Grid>
        <Grid>
          <p style={{ width: "83%", marginLeft: "12%  ", marginTop: "2%" }}>
            We help you get a free green deal grant from the energy providers or
            government to make your home more energy efficient helping you save
            on your bills You can get a free boiler and other Energy savings
            measures if your receive any of the following benefits
          </p>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          height: "50vh",
          width: "80%",
          marginTop: "1%",
          marginLeft: "10%",
        }}
      >
        <Grid item xs={3} className={classes.inner}>
          <img
            className={classes.img}
            src={eff22}
            width="226"
            height="226"
            alt=""
          />

          <div style={{ marginTop: "-20%" }}>
            <img src={shape} style={{ marginTop: "-30%", marginLeft: "22%" }} />
            <div
              style={{ marginTop: "-19%", marginLeft: "20%", color: "white" }}
            >
              Energy Efficient doors <br /> & windows
            </div>
          </div>
        </Grid>
        <Grid item xs={3} className={classes.inner}>
          <img
            className={classes.img}
            src={heatc}
            alt=""
            height="200"
            width="226px"
          />
          <div style={{ marginTop: "-13%" }}>
            <img src={shape} style={{ marginTop: "-30%", marginLeft: "1%" }} />
            <div
              style={{ marginTop: "-19%", marginLeft: "5%", color: "white" }}
            >
              FIRST TIME CENTRAL <br /> HEATING
            </div>
          </div>
        </Grid>
        <Grid item xs={3} className={classes.inner}>
          <img
            className={classes.img}
            src={test}
            alt=""
            height="200"
            width="226px"
          />
          <div style={{ marginTop: "-13%" }}>
            <img src={shape} style={{ marginTop: "-30%", marginLeft: "1%" }} />
            <div
              style={{ marginTop: "-19%", marginLeft: "5%", color: "white" }}
            >
              ROOM IN ROOF
              <br />
              INSULATION
            </div>
          </div>
        </Grid>
        <Grid item xs={3} className={classes.inner}>
          <img
            className={classes.img}
            src={loft1}
            alt=""
            height="200"
            width="226px"
          />
          <div style={{ marginTop: "-13%" }}>
            <img src={shape} style={{ marginTop: "-30%", marginLeft: "1%" }} />
            <div
              style={{ marginTop: "-14%", marginLeft: "5%", color: "white" }}
            >
              LOFT INSULATION
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          height: "50vh",
          width: "80%",
          marginTop: "2%",
          marginLeft: "10%",
        }}
      >
        <Grid item xs={3} className={classes.inner}>
          <img
            className={classes.img}
            src={under22}
            alt=""
            height="200"
            width="226px"
          />
          <div style={{ marginTop: "-13%" }}>
            <img src={shape} style={{ marginTop: "-30%", marginLeft: "1%" }} />
            <div
              style={{ marginTop: "-19%", marginLeft: "-4%", color: "white" }}
            >
              UNDER FLOOR <br /> INSULATION
            </div>
          </div>
        </Grid>
        <Grid item xs={3} className={classes.inner}>
          <img
            className={classes.img}
            src={boiler22}
            alt=""
            height="200"
            width="226px"
          />
          <div style={{ marginTop: "-13%" }}>
            <img src={shape} style={{ marginTop: "-30%", marginLeft: "1%" }} />
            <div
              style={{ marginTop: "-14%", marginLeft: "5%", color: "white" }}
            >
              BOILER REPLACEMENT
            </div>
          </div>
        </Grid>
        <Grid item xs={3} className={classes.inner}>
          <img
            className={classes.img}
            src={heatcc}
            alt=""
            height="200"
            width="226px"
          />
          <div style={{ marginTop: "-13%" }}>
            <img src={shape} style={{ marginTop: "-30%", marginLeft: "1%" }} />
            <div
              style={{ marginTop: "-14%", marginLeft: "5%", color: "white" }}
            >
              HEATING CONTROLS
            </div>
          </div>
        </Grid>

        <Grid item xs={3} className={classes.inner}>
          <img
            className={classes.img}
            src={doors}
            alt=""
            height="200"
            width="226px"
          />
          <div style={{ marginTop: "-13%" }}>
            <img src={shape} style={{ marginTop: "-30%", marginLeft: "1%" }} />
            <div
              style={{ marginTop: "-14%", marginLeft: "5%", color: "white" }}
            >
              DOORS
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Step6;
