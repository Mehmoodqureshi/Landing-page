import Logo from "../Images/logo.png";
import { Grid, makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  contact: {
    padding: "5px 15px",
    fontSize: "14px",
    color: "#fff",
    textTransform: "uppercase",
    background: "#ff5107",
    borderRadius: "30px",
    fontWeight: "500",
  },
  navbar: {
    paddingTop: "1%",
    backgroundColor: "white",
    paddingBottom: "1%",
    marginRight: "1%",
    fontSize: "1.25rem",
    position: "fixed",
    textDecoration: "none",
    whiteSpace: "nowrap",
    justifyContent: "space-around",
    boxShadow: " 0 .5rem 1rem rgba(0,0,0,.15)!important",
    zIndex: "999",
  },
  btn: {
    marginTop: "2%",
    marginLeft: "180px",
    fontSize: "15px ",
    width: "60%",
    color: "#4c4c4c",
    display: "flex",
    justifyContent: "space-between",
    transition: "all .3s ease",
    textDecoration: "none",
  },
  // list: {
  //   flexGrow: "1",
  //   alignItems: "center",
  // },
}));
const Navbar = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={1} className={classes.navbar}>
      <Grid item xs={2}>
        {/* <img src={Logo} alt=""></img> */}
        <img
          src={Logo}
          alt=""
          style={{
            width: "100%",
            height: " auto",
            maxWidth: "100%",
            marginLeft: "10%",
            // zoom: "160%",
          }}
        />
      </Grid>
      <Grid item xs={8} className={classes.list}>
        <span className={classes.btn}>
          <Button
            className={"btn"}
            style={{ borderBottom: "4px solid #ffe605", fontWeight: "bold" }}
          >
            Home
          </Button>
          <Button
            className={"btn"}
            style={{ borderBottom: "4px solid #ffe605", fontWeight: "bold" }}
          >
            Services
          </Button>
          <Button
            className={"btn"}
            style={{ borderBottom: "4px solid #ffe605", fontWeight: "bold" }}
          >
            About Us
          </Button>
          <Button
            className={"btn"}
            style={{ borderBottom: "4px solid #ffe605", fontWeight: "bold" }}
          >
            Free Insullation Grant
          </Button>
        </span>
      </Grid>

      <div style={{ marginTop: "1%", marginRight: "5%" }}>
        <span className={classes.contact}>CALL US FREE ON</span>
        <br />

        <span>1234-567-8901</span>
      </div>
    </Grid>
  );
};

export default Navbar;
