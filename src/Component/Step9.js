import { Grid } from "@material-ui/core";
import marker from "../Images/map-marker.png";
import phone from "../Images/phone-2.png";
import inbox from "../Images/inbox.png";
const Step9 = () => {
  return (
    // <Grid container xs={10}>
    <>
      <Grid item>
        <h2
          style={{
            marginTop: 0,
            marginBottom: ".5rem",
            textAlign: "left",
            fontWeight: 500,
            lineHeight: 1.2,
            fontSize: "1.25rem!important",
          }}
        >
          Our Address
        </h2>
        <p
          style={{
            fontSize: "1.25rem!important",
            width: "60%",
            textAlign: "left",
          }}
        >
          ompletely synergize resource taxing relationships via premier niche
          markets. Professionally cultivate one-to-one customer service.
        </p>
      </Grid>
      <Grid item>
        <img src={marker} alt="" style={{ marginRight: "100%" }} />
        <h2
          style={{
            marginLeft: "-51%",
            marginTop: "-9%",
            marginBottom: "-3%",
            // fontSize: "20px",
          }}
        >
          Address:
        </h2>
        <p
          style={{
            fontSize: "1.25rem!important",
            width: "45%",
            textAlign: "left",
            marginLeft: "11%",
            // marginTop: "-12%",
          }}
        >
          457 Manchester Road, Heaton Chapel Stockport SK4 5DJ{" "}
        </p>
        <img src={phone} alt="" style={{ marginLeft: "-97%" }} />
        <h2
          style={{ marginTop: "-8%", marginLeft: "-62%", marginBottom: "-3%" }}
        >
          Phone:
        </h2>
        <p style={{ marginLeft: "-62%" }}>123456789</p>
        <img src={inbox} alt="" style={{ marginLeft: "-97%" }} />
        <h2
          style={{ marginTop: "-8%", marginLeft: "-62%", marginBottom: "-3%" }}
        >
          Email:
        </h2>
        <p style={{ marginLeft: "-62%" }}>Example@gmail.com</p>
      </Grid>
      {/* // </Grid> */}
    </>
  );
};

export default Step9;
