import { Divider, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { makeStyles } from "@material-ui/core";
import svg5 from "../Images/svgcheck.svg";
const useStyles = makeStyles((theme) => ({
  home: {
    paddingBottom: "12px",
    paddingLeft: "-40px",
    marginBottom: "14px",
    // background: `url(${svg5}) 0 0 no-repeat`,
    borderBottom: "2px solid #ff5107",
    fontSize: "18px",
    textAlign: "left",
  },
  h2: {
    color: "#ff5107",
    borderBottom: " 4px solid #ff5107",
    padding: "10px 10px 15px 0px",
    fontSize: "33px",
    fontWeight: " 600",
    marginBottom: "20px",
  },
  btn: {
    alignItems: " center",
    padding: "17px 15px 6px 30px",
    marginTop: "30px",
    fontFamily: "Gotham Rounded Book,sans-serif",
    fontSize: "16px",
    lineHeight: "150%",
    textAlign: "left",
    whiteSpace: "normal",
    borderRadius: "100px",
  },
}));

const Step4 = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction={"column"}
      spacing={1}
      style={{ marginLeft: "-18%" }}
    >
      <Grid item>
        <a href="#" style={{ textDecoration: "none" }}>
          <h2
            style={{
              textAlign: "left",
              color: "black",
              borderBottom: "5px solid #ff5107",
              padding: " 20px, 50px, 15px, 0px",
              fontSize: " 33px",
              fontWeight: "600",
              marginBottom: "-5px",
              marginLeft: "8%",
              width: "90%",
              marginTop: "10%",
            }}
          >
            Do You Qualify
          </h2>
        </a>
      </Grid>

      <Grid item>
        <ul>
          <p className={classes.home}>
            <img src={svg5} />
            <div style={{ marginLeft: "10%", marginTop: "-8%" }}>Homeowner</div>
          </p>
          <p className={classes.home}>
            <img src={svg5} />
            <div style={{ marginLeft: "10%", marginTop: "-8%" }}>
              Receive Income Related Benefits
            </div>
          </p>
          <p className={classes.home}>
            <img src={svg5} />
            <div style={{ marginLeft: "10%", marginTop: "-8%" }}>
              Oil, Gas, LPG or Electric Supply
            </div>
          </p>
          <p className={classes.home}>
            <img src={svg5} />
            <div style={{ marginLeft: "10%", marginTop: "-8%" }}>
              Boiler 7+ Years old
            </div>
          </p>
        </ul>
      </Grid>
      <Grid item style={{ display: "flex", justifyContent: "center" }}>
        <Button
          varient="contained"
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 100px",
            marginTop: "-90px",
            fontFamily: "Gotham Rounded Book,sans-serif",
            fontSize: "20px",
            lineHeight: "150%",
            textAlign: "left",
            whiteSpace: "normal",
            borderRadius: "100px",
            background: "#ff5107",
            color: "white",
            verticalAlign: "center",
            marginLeft: "12%",
            zIndex: "-1",
          }}
        >
          <WhatsAppIcon
            style={{ marginTop: "1%", marginLeft: "-40%", zoom: 2 }}
          />
          Apply Online
        </Button>
      </Grid>
      <Grid item style={{ display: "flex", justifyContent: "center" }}>
        <Button
          varient="contained"
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 100px",
            // marginTop: "-30px",
            fontFamily: "Gotham Rounded Book,sans-serif",
            fontSize: "20px",
            lineHeight: "150%",
            textAlign: "left",
            whiteSpace: "normal",
            borderRadius: "100px",
            background: "#dc3545",
            color: "white",
            verticalAlign: "center",
            marginLeft: "14%",
            zIndex: "-1",
          }}
        >
          <WhatsAppIcon
            style={{ marginTop: "1%", marginLeft: "-40%", zoom: 2 }}
          />
          CALL OUR TEAM
          <br />
          123 456 789
          {/* </span> */}
        </Button>
      </Grid>
      {/* <a href="#">
          <span>
            <WhatsAppIcon />
          </span>
          <p>
            <span>Apply Online</span>
          </p>
        </a>
        <a href="tel:1234567890">
          <p>
            <span>
              <WhatsAppIcon />
            </span>
            CALL OUR TEAM ON:
            <br />
            <span>1234 567 8901</span>
          </p>
        </a> */}
      {/* </Grid> */}
    </Grid>
  );
};

export default Step4;
