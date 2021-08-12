import { Divider, Grid, makeStyles } from "@material-ui/core";
import Step4 from "./Step4";
const useStyles = makeStyles((theme) => ({
  home: {
    color: "#ff5107",
    borderBottom: "4px, solid #ff5107",
    padding: " 10px, 10px, 15px, 0px",
    fontSize: " 33px",
    fontWeight: "600",
    marginBottom: "20px",
  },
}));

const Step3 = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={1}
      style={{ gridTemplateRows: "auto auto", paddingLeft: "3%" }}
    >
      <Grid item xs={8} clasName={classes.home}>
        <a
          href="#"
          style={{ textDecoration: "none", color: "#ff5107", lineHeight: 1.2 }}
        >
          <h2
            style={{
              textAlign: "left",
              color: "#ff5107",
              borderBottom: "4px, solid #ff5107",
              padding: " 10px, 10px, 15px, 0px",
              fontSize: " 33px",
              fontWeight: "600",
              marginBottom: "20px",
              marginLeft: "8%",
              width: "90%",
            }}
            className="heading"
          >
            Free Boiler Grant Scheme
          </h2>
          <Divider
            style={{
              background: "2px #ff5107",
              height: "1%",
              width: "87%",
              marginLeft: "8%",
            }}
          />
        </a>

        <h2
          style={{
            textAlign: "left",
            fontSize: "2rem",
            fontWeight: 500,
            lineHeight: 1.2,
            marginLeft: "8%",
            width: "90%",
          }}
        >
          Free Boiler Scheme & New Consumer Rights
        </h2>
        <p
          style={{
            textAlign: "left",
            marginBottom: "2%",
            marginLeft: "8%",
            width: "87%",
          }}
        >
          Our team have the knowledge and experience (15+ years and counting) of
          the industry to allow you to access the free boiler grant scheme local
          to you. From the initial assessment of your home, installation and
          aftercare our team will provide an end-to-end service to keep things
          as simple as possible. We are UK based and support applicants through
          the process from all of the UK.
        </p>
        <p
          style={{
            textAlign: "left",
            marginBottom: " .5rem!important",
            marginLeft: "8%",
            width: "85%",
          }}
        >
          We have a wealth of experience in ensuring homeowners, just like you,
          are guided through the process of replacing their old inefficient
          boilers as per the government-backed boiler 2021 grant scheme. We make
          it easy to know exactly where you are up to with your application.
          Once your grant has been approved, we will keep you informed as we
          progress and book your boiler installation in for you at the earliest
          opportunity
        </p>

        <h2 style={{ textAlign: "left", marginLeft: "8%", width: "90%" }}>
          Get The Boiler YOUR Home Deserves for FREE
        </h2>
        <p style={{ textAlign: "left", marginLeft: "8%", width: "90%" }}>
          "The scheme is open to a number of different qualifying resident types
          (including homeowners and some eligible pensioners). So it is
          important to us that our heating experts have the skills and
          experience to be able to fit your boiler to suit your home with the
          minimum of disruption."
        </p>
      </Grid>
      <Grid item xs={4}>
        <Step4 />
      </Grid>
    </Grid>
  );
};

export default Step3;
