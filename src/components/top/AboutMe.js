import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: (dark) => (dark ? "#69868c" : "#a6d5df"),
    paddingTop: "10px",
    paddingBottom: "20px",
  },
});

const AboutMe = (props) => {
  return (
    <div id="read-me" className={useStyles(props.darkMode).root}>
      <h4>About Me</h4>
      <p style={{ padding: "0 30px" }}>
        I absolutely love computers, always have. The human body is a
        fascination to me as well, which led me to pursue Exercise Sciences at
        BYU and graduate with a bachelor's in that field. However, my career has
        stayed in the technology world. A few years ago, there were a series of
        2 shocking deaths in my family which happened within 6 months of each
        other, which shook me and my family to the core. As I re-evaluated my
        life in the years since, I have gained an unquenchable desire to gain as
        much knowledge as I can in the field of computer programming and
        continue in the never ending spirit of learning. I have taught myself
        with the help of amazing free resources online, and am currently
        attending Lambda School's web developer track, the latter of which has
        helped me in my journey more than I could have ever imagined. I have an
        amazing wife and 3 kids, and consider them the joys of my life.
      </p>
    </div>
  );
};

export default AboutMe;
