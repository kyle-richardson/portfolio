import React, {useState} from "react";
import { useTheme, ThemeProvider, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Slider from '@material-ui/core/Slider';

const text = {
  long: `I absolutely love computers; always have. The human body is a
  fascination to me as well, which led me to pursue Exercise Sciences at
  BYU and graduate with a bachelor's in that field. However, my career has
  stayed in the technology world. A few years ago, there were a series of
  2 shocking deaths in my family which happened within 6 months of each
  other, which shook me and my family to the core. As I re-evaluated my
  life in the years since, I have gained an unquenchable desire to gain as
  much knowledge as I can in the field of computer programming and
  have a meaningful impact in others' lives. I have taught myself
  with the help of amazing free resources online, and recently graduated from 
  Lambda School's web developer track. I have an amazing wife, 3 
  kids, and a dog who are the joys of my life. I also enjoy playing video games 
  when I can fit it in.`,
  medium: `I absolutely love computers; always have.  Recent events in my life have
  caused me to re-evaluate my career. I am determined to learn all I can and help others
  through computer programming. I recently graduated from Lambda School web development track.
  I am a proud husband and father, and enjoy playing video games when I can fit it in.`,
  short: `I absolutely love computers; always have. I want to help others through what 
  I build.`
}



const useStyles = makeStyles({
  root: {
    backgroundColor: (dark) => (dark ? "#3d4149" : "rgb(230,230,230)"),
    padding: "50px 0",
    width: '100%',
    transition: "height .5s"
    // margin: "0 auto"
  },
  sliderWrapper: {
    width: "200px",
    margin: "0 auto",
    
  },
  slider: {
      markLabel: {
        color: "white"
      }
    }
});
const marks = [
  {
    value: 10,
    label: "short"
  },
  {
    value: 20,
    label: "medium"
  },
  {
    value: 30,
    label: "long"
  }
  
]



const AboutMe = (props) => {
  const [value, setValue] = useState(20)
  const [length, setLength] = useState('medium')
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const sliderTheme = createMuiTheme({
    palette: {
      type: props.darkMode ? 'dark' : 'light',
    },
    overrides: {
      MuiSlider: {
        markLabel: {
          fontSize: "1.3rem"
        },
        thumb: {
          height: 22,
          width: 22,
          marginTop: -11,
          marginLeft: -11,
        }
      }
    }
  });

  const handleChange = (e, newValue) => {
    e.preventDefault()
    if (newValue===10) {
      setLength('short')
      setValue(10)
    }
    if (newValue===20) {
      setLength('medium')
      setValue(20)
    }
    if (newValue===30) {
      setLength('long')
      setValue(30)
    }
  }
return (
  <ThemeProvider theme={sliderTheme}>
    <div id="about-me" className={useStyles(props.darkMode).root}>
      <h2 style={{padding: "0 0 15px 0"}}>About Me</h2>
      <div className={useStyles().sliderWrapper}>
      <Slider
        value={value}
        defaultValue={20}
        step={10}
        marks={marks}
        min={10}
        max={30}
        onChange={handleChange}
      />
      </div>
      <p style={{width: matches ? "95%" : "70%", textAlign: "center", margin: "0 auto"}}>
        {text[length]}
      </p>
    </div>
  </ThemeProvider>
    
  );
};

export default AboutMe;
