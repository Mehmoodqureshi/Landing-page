import { Button, Grid, TextField } from "@material-ui/core";
import Step9 from "./Step9";
import marker from "../Images/map-marker.png";
import phone from "../Images/phone-2.png";
import inbox from "../Images/inbox.png";

const Step8 = () => {
  return (
    <Grid
      container
      // spacing={1}
      direction="row"
      style={{ padding: "2% 4% 6% 8%" }}
    >
      <Grid
        item
        xs={6}
        direction="column"
        style={{ backgroundColor: " #f8f8f8" }}
      >
        <form
          style={{
            // backgroundColor: "yellow",
            position: "relative",
            backgroundcolor: " #f8f8f8",
            padding: "52px",
          }}
        >
          <h2 style={{ fontSize: "30px", fontWeight: "500" }}>Get In Touch</h2>
          <TextField
            fullWidth
            style={{
              display: "block",
              marginBottom: "2%",
              width: "100%",
              // padding: ".375rem .75rem",
              fontSize: "1rem",
              lineHeight: "1.5",
              color: "#212529",
              backgroundColor: " #fff",
              backgroundClip: "padding-box",
              border: "1px solid #ced4da",
              appearance: "none",
              borderRadius: ".25rem",
              transition:
                "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
            }}
            type="text"
            variant="outlined"
            placeholder="Your Name"
          />
          <TextField
            fullWidth
            style={{
              display: "block",
              width: "100%",
              marginBottom: "2%",
              // padding: ".375rem .75rem",
              fontSize: "1rem",
              lineHeight: "1.5",
              color: "#212529",
              backgroundColor: " #fff",
              backgroundClip: "padding-box",
              border: "1px solid #ced4da",
              appearance: "none",
              borderRadius: ".25rem",
              transition:
                "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
            }}
            type="text"
            variant="outlined"
            placeholder="Your Email"
          />
          <TextField
            fullWidth
            style={{
              display: "block",
              width: "100%",
              marginBottom: "2%",
              // padding: ".375rem .75rem",
              fontSize: "1rem",
              lineHeight: "1.5",
              color: "#212529",
              backgroundColor: " #fff",
              backgroundClip: "padding-box",
              border: "1px solid #ced4da",
              appearance: "none",
              borderRadius: ".25rem",
              transition:
                "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
            }}
            InputLabelProps={{ shrink: true }}
            type="number"
            placeholder="Your Number"
            variant="outlined"
          />
          <textarea
            type="text"
            variant="outlined"
            placeholder="Message"
            rows="3"
            style={{
              display: "block",
              width: "93.5%",
              marginBottom: "2%",
              // padding: ".375rem .75rem",
              fontSize: "1rem",
              lineHeight: "1.5",
              color: "#212529",
              backgroundColor: " #fff",
              backgroundClip: "padding-box",
              border: "1px solid #ced4da",
              appearance: "none",
              borderRadius: ".25rem",
              transition:
                "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
              padding: " .5rem 1rem",
              fontSize: "1.25rem",
            }}
          />
          <Button
            style={{
              padding: "15px 50px",
              fontSize: "16px",
              border: "none",
              color: "#fff",
              textTransform: "uppercase",
              background: " #ff5107",
              fontWeight: 500,
              padding: "15px 50px",
              marginLeft: "67%",
            }}
          >
            SUBMIT
          </Button>
        </form>
      </Grid>
      <div
        style={{
          border: "0",
          borderLeft: " 2px dashed orange",
          height: "360px",
          position: "absolute",
          marginLeft: "45%",
          marginTop: "6%",
          zIndex: "-1",
        }}
      />
      <Grid
        container
        spacing={2}
        xs={6}
        direction="column"
        style={{ paddingLeft: "4%", paddingTop: "2%" }}
      >
        {/* <Grid item> */}
        {/* <Step9 />
         */}
        <Grid item>
          <h2
            style={{
              marginTop: 0,
              marginBottom: ".5rem",
              textAlign: "left",
              fontSize: "30px",
              fontWeight: "500",
              lineHeight: 1.2,
              fontSize: "1.25rem!important",
            }}
          >
            Our Address
          </h2>
          <p
            style={{
              //    fontSize: "1.25rem!important",
              width: "96%",
              fontSize: "21px",
              textAlign: "left",
              marginBottom: "1rem",
              padding: ".5rem!important",
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
              marginLeft: "-70%",
              marginTop: "-9%",
              marginBottom: "-3%",
              fontSize: "18px",
              fontWeight: "500",
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
              marginLeft: "9%",
              // marginTop: "-12%",
            }}
          >
            457 Manchester Road, Heaton Chapel Stockport SK4 5DJ{" "}
          </p>
          <img src={phone} alt="" style={{ marginLeft: "-97%" }} />
          <h2
            style={{
              marginTop: "-8%",
              marginLeft: "-72%",
              marginBottom: "-3%",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Phone:
          </h2>
          <p style={{ marginLeft: "-68%" }}>123456789</p>
          <img src={inbox} alt="" style={{ marginLeft: "-97%" }} />
          <h2
            style={{
              marginTop: "-8%",
              marginLeft: "-72%",
              marginBottom: "-3%",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Email:
          </h2>
          <p style={{ marginLeft: "-54%" }}>Example@gmail.com</p>
        </Grid>
        {/* </Grid> */}
      </Grid>
    </Grid>
  );
};

export default Step8;
