import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const StyledButton = withStyles({
  root: {
    background: "#F26363",
    margin: "10px 0",
    height: "50px",
    "&:hover": {
      background: "rgb(250, 102, 102)"
    }
  },
  label: {
    textTransform: "uppercase",
    color: "white",
    fontSize: "1.5rem"
  }
})(Button);

export const ButtonStyles = makeStyles({
  root: {
    borderRadius: 4,
    color: props => {
      if (props.list && props.list.includes(props.color)) {
        if (props.color === "css3") return "rgb(47, 47, 252)";
        if (props.color === "html5") return "orange";
        if (props.color === "react") return "lightblue";
        if (props.color === "node-js") return "lightgreen";
        if (props.color === "python") return "rgb(204, 204, 17)";
      } else return "lightgray";
    },
    "&:hover": {
      color: props => {
        if (props.color === "css3") return "rgb(47, 47, 252)";
        if (props.color === "html5") return "orange";
        if (props.color === "react") return "lightblue";
        if (props.color === "node-js") return "lightgreen";
        if (props.color === "python") return "rgb(204, 204, 17)";
      }
    }
  }
});
