import { Divider, Grid, makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import faqBanner from "../Images/faq-banner.jpg";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
const useStyles = makeStyles((theme) => ({
  main: {
    backgroundImage: `url(${faqBanner})`,
    color: "white",
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
    marginBottom: "2% ",
    backgroundSize: "cover",
  },
  btn: {
    color: "white",
    borderBottom: "2px solid lightgray !important",
    borderRadius: "0px !important",
    // paddingLeft: " 0px !important",
    // paddingBottom: "20px !important",
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "20%",
    width: "60%",
    marginTop: "2%",
  },
}));

const Step7 = () => {
  const [data, setData] = useState(1);
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        // direction={"row"}
        // justifyContent="center"
        style={{ width: "100%", height: "65vh", mariginTop: "10%" }}
        // alignItems="center"
        className={classes.main}
      >
        <Grid container xs={6} direction={"column"}>
          <Grid item>
            <h2
              style={{
                textAlign: "left",
                paddingLeft: " 0px !important",
                marginTop: "9%",
                marginBottom: "-5%",
                marginLeft: "20%",
              }}
            >
              Usefull Information
            </h2>
          </Grid>
          <Divider
            style={{
              borderBottom: " 4px solid #F21626",
              padding: "10px 10px 15px 0px",
              fontSize: " 33px",
              fontWeight: 600,
              marginBottom: " 20px",
              width: "60%",
              marginLeft: "20%",
              marginTop: "0%",
            }}
          />

          <Grid item>
            <span className={classes.btn} onClick={() => setData(1)}>
              Reduce your heating bill for free
              <KeyboardArrowRightIcon />
            </span>
          </Grid>
          <Grid item>
            <span className={classes.btn} onClick={() => setData(2)}>
              How is the Boiler Grant free?
              <KeyboardArrowRightIcon />
            </span>
          </Grid>
          <Grid item>
            <span className={classes.btn} onClick={() => setData(3)}>
              How long does installation take?
              <KeyboardArrowRightIcon />
            </span>
          </Grid>
          <Grid item>
            <span className={classes.btn} onClick={() => setData(4)}>
              Homeowner information
              <KeyboardArrowRightIcon />
            </span>
          </Grid>
          {/* </Grid> */}
        </Grid>
        <Grid
          container
          direction={"column"}
          xs={6}
          style={{ marginLeft: "-8%  " }}

          // justifyContent="flex-end"
          // alignItems="center"
        >
          <Grid item>
            <h2
              style={{
                textAlign: "left",
                paddingLeft: " 0px !important",
                marginTop: "9%",
                marginBottom: "-6%",
                marginLeft: "1%",
              }}
            >
              Homeowner Information
            </h2>
          </Grid>
          <Divider
            style={{
              borderBottom: " 4px solid #F21626",
              padding: "10px 10px 15px 0px",
              fontSize: " 33px",
              fontWeight: 600,
              marginBottom: " 20px",
            }}
          />
          <Grid item>
            {data === 1 && (
              <>
                {" "}
                <p style={{ textAlign: "left" }}>
                  The UK’s insulation grants, such as ECO scheme, are government
                  schemes funded by the UK’s largest utility companies,
                  including the so-called ‘Big Six’. These companies are duly
                  obliged to offer grants that can help those in need to enhance
                  the energy efficiency of their homes for good, without costing
                  you a penny.
                </p>
                <p style={{ textAlign: "left" }}>
                  The grants available with the ECO scheme and Local Authority
                  Flex Funding Schemes tend to cover many different types of
                  insulation, depending on your property age and type. This
                  includes cavity wall and loft insulation, as well as
                  first-time central heating and boiler replacements.
                </p>
              </>
            )}

            {data === 2 && (
              <>
                {" "}
                <p style={{ textAlign: "left" }}>
                  New A-rated boiler grants are also offered as part of the ECO
                  scheme, helping households with the opportunity for
                  inefficient boilers to be replaced completely free of charge,
                  or heavily subsidised.
                </p>
                <p>
                  Providing your boiler is more than five-years-old or deemed as
                  faulty and a homeowner, you should be eligible for a new
                  A-rated boiler, installed by Registered GAS SAFE and
                  Governments Trustmark installer and will come with a
                  guarantee.
                </p>
                <p style={{ textAlign: "left" }}>
                  For older and more in-efficient properties, grant funding is
                  more likely to cover full costs. If you have a very efficient
                  property, You may need to contribute a small amount to cover
                  the cost of the boiler install this will advised to you before
                  any works are carried out.
                </p>
              </>
            )}
            {data === 3 && (
              <p style={{ textAlign: "left" }}>
                Most properties can have cavity wall and loft insulation
                installed in just a few hours, although larger households may
                require an entire day for installation.
              </p>
            )}
            {data === 4 && (
              <>
                <p style={{ textAlign: "left" }}>
                  In order to qualify for any of the available government
                  grants, you will need to prove that you are the legal owner of
                  the property if renting permission will be required from the
                  landlord or managing agent, first and foremost.
                </p>
                <p style={{ textAlign: "left" }}>
                  Secondly, you will need to be in receipt of at least one of
                  the following benefits:
                </p>

                <p style={{ textAlign: "left", height: "50vh" }}>
                  Attendance Allowance, Carer’s Allowance, Child Benefit (please
                  note that most children under 16 years of age are entitled to
                  £20 p.w child benefit), Employment and support allowance
                  (income-related), Personal independence payment, Jobseeker’s
                  allowance, (Income-based) Income Support, Disability Living
                  Allowance, Income Support, Pension Credit (Guarantee), Child
                  Tax Credit, Working tax credit, Universal credit, Armed Forces
                  Independence Payment, Constant Attendance Allowance,
                  Industrial injuries disablement benefit, Mobility supplement,
                  Severe disablement allowance, War Pension Mobility Supplement.
                </p>
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Step7;
