import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import png1 from "../Images/eligibility-icon.png";
import png2 from "../Images/survey-icon.png";
import png3 from "../Images/installation-icon.png";

const Step5 = () => {
  return (
    <Grid
      container
      direction={"column"}
      spacing={1}
      className="backgroun-gredient"
      style={{ height: "90vh", marginTop: "5%" }}
    >
      <Grid item>
        <h2 style={{ textAlign: "center!important", color: "white" }}>
          Get a Boiler Grant In 3 Simple Steps
        </h2>
      </Grid>
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={3} style={{ marginTop: "5%", textAlign: "left" }}>
          <img src={png1} />
          <h6
            style={{
              color: "white",
              display: "block",
              fontSize: " 98%",
              marginBottom: "24px",
              fontWeight: 500,
              lineHeight: 1.2,
              marginTop: "1%",
            }}
          >
            Check Your Eligibility Online
          </h6>
          <p style={{ color: " white", textAlign: "left" }}>
            Find out if you are eligible for funding by completing our quick and
            easy online application form.
          </p>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid
          item
          xs={3}
          style={{
            textAlign: "left",
            marginLeft: "-3%",
            marginTop: "5%",
            paddingRight: "10px",
            paddingLeft: "10px",
          }}
        >
          <img src={png2} />
          <h6
            style={{
              textAlign: "left",
              color: "white",
              display: "block",
              fontSize: " 98%",
              marginBottom: "24px",
              fontWeight: 500,
              lineHeight: 1.2,
              marginTop: "1%",
            }}
          >
            Have a Survey
          </h6>
          <p style={{ color: " white", textAlign: "left" }}>
            A member of our team will be in touch to book your free, no
            obligation property survey
          </p>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={3} style={{ marginLeft: "-7%", marginTop: "5%" }}>
          <img src={png3} style={{ marginLeft: "-90%" }} />
          <h6
            style={{
              textAlign: "left",
              color: "white",
              display: "block",
              fontSize: " 98%",
              marginBottom: "24px",
              fontWeight: 500,
              lineHeight: 1.2,
              marginTop: "1%",
            }}
          >
            Installation!
          </h6>
          <p style={{ color: " white", textAlign: "left" }}>
            If your property qualifies for an ECO Boiler Grant, our team will
            complete final proof of benefit checks before booking you in for an
            installation date – as soon as the very next day!
          </p>
        </Grid>
      </Grid>
      <Grid item style={{ marginTop: "5%" }}>
        <Button
          style={{
            padding: "15px 50px",
            fontSize: "16px",
            border: "none",
            color: "#fff",
            textTransform: "uppercase",
            background: "#ff5107",
            fontWeight: "500",
          }}
          varient="contained"
          color="primary"
        >
          SUBMIT
        </Button>
      </Grid>
    </Grid>
  );
};

export default Step5;
