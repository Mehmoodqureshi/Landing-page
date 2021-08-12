import { Grid } from "@material-ui/core";

const Footer = () => {
  return (
    <Grid container>
      <Grid
        item
        style={{ width: "100%", color: "white", backgroundColor: "#6c757d" }}
      >
        <p>© 2012-2020 | All Rights Reserved </p>
      </Grid>
    </Grid>
  );
};

export default Footer;
