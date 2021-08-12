import Carousel from "./Component/Carousel";
import "./App.css";
import Content from "./Component/Content";
import Navbar from "./Component/Navbar";
import Step1 from "./Component/Step1";
import Step2 from "./Component/Step2";
import Step3 from "./Component/Step3";
import Step4 from "./Component/Step4";
import Step5 from "./Component/Step5";
import Step6 from "./Component/Step6";
import Step7 from "./Component/Step7";
import Step8 from "./Component/Step8";
import Step9 from "./Component/Step9";
import Footer from "./Component/Footer";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item>
          <Navbar />
          <Step1 />
          <Step2 />
          <Step3 />
          <Step5 />
          <Step6 />
          <Step7 />
          <Carousel />
          <Step8 />
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
