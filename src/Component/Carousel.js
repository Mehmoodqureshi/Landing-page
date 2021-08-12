import { Grid, makeStyles } from "@material-ui/core";
import Carousel from "react-elastic-carousel";
import Content from "./Content";

const Step8 = () => {
  return (
    <Carousel
      itemsToShow={1}
      // autoPlay={200}
      showArrows={false}
      enableAutoPlay={true}
      animationSpeed={1000}
    >
      {/* <Grid
        container
        spacing={1}
        Style={{
          width: "100%",
          height: "200px",
          background: "red",
          color: "white",
          fontSize: "30px",
          margin: "0 20px",
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
          backgroundColor: "red",
        }}
      > */}
      <Content
        content={
          " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
        }
      />
      <Content
        content={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. There are many variations of passages of Lorem Ipsum available. Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        }
      />
      <Content
        content={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. There are many variations of passages of Lorem Ipsum available. Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        }
      />
      {/* </Grid> */}
    </Carousel>
  );
};

export default Step8;
