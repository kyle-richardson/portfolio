import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const drawerWidth = 160;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: "#282c34",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: (dark) => (dark ? "slategray" : "white"),
    color: (dark) => (dark ? "white" : "#282c34"),
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  listItem: {},
}));

const Menu = ({ darkMode, setDarkMode }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: useStyles(darkMode).drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemText
              primary={"About Me"}
              primaryTypographyProps={{ variant: "h6" }}
            />
          </ListItem>
          <ListItem
            button
            onClick={() =>
              window.open("https://www.kylerichardson.tech", "_blank")
            }
          >
            <ListItemText
              primary={"Digital Resume"}
              primaryTypographyProps={{ variant: "h6" }}
            />
          </ListItem>
          <ListItem
            button
            onClick={() =>
              window.open(
                "https://docs.google.com/document/d/e/2PACX-1vTRqxugKuzEeFEsaOtUGa4BrzfCsGuhEWNGOPoqQHdGWDVC2GhLmf2BYMMMyQnkkR1gTv12fz1-McEa/pub",
                "_blank"
              )
            }
          >
            <ListItemText
              primary={"Printable Resume"}
              primaryTypographyProps={{ variant: "h6" }}
            />
          </ListItem>
          <ListItem button onClick={() => (window.location.href = "#projects")}>
            <ListItemText
              primary={"Projects"}
              primaryTypographyProps={{ variant: "h6" }}
            />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem
            button
            onClick={() =>
              window.open("mailto:kyle.richardson1@gmail.com", "_blank")
            }
          >
            <ListItemIcon style={{ color: "inherit" }}>
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </ListItemIcon>
            <ListItemText
              primary={"Email"}
              primaryTypographyProps={{ variant: "h6" }}
            />
          </ListItem>
          <ListItem
            button
            onClick={() =>
              window.open("https://github.com/kyle-richardson", "_blank")
            }
          >
            <ListItemIcon style={{ color: "inherit" }}>
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </ListItemIcon>
            <ListItemText
              primary={"Github"}
              primaryTypographyProps={{ variant: "h6" }}
            />
          </ListItem>
          <ListItem
            button
            onClick={() =>
              window.open("https://linkedin.com/in/kyle-m-richardson", "_blank")
            }
          >
            <ListItemIcon style={{ color: "inherit" }}>
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </ListItemIcon>
            <ListItemText
              primary={"Linked In"}
              primaryTypographyProps={{ variant: "h6" }}
            />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={() => setDarkMode(!darkMode)}>
            <ListItemIcon style={{ color: "inherit" }}>
              {!darkMode ? (
                <Brightness7Icon fontSize="large" />
              ) : (
                <Brightness3Icon fontSize="large" />
              )}
            </ListItemIcon>
            <ListItemText
              primary={darkMode ? "Light Mode" : "Dark Mode"}
              primaryTypographyProps={{ variant: "h6" }}
            />
          </ListItem>
          <ListItem
            button
            onClick={() => (window.location.href = "#App-header")}
          >
            <ListItemText
              primary={"Go To Top"}
              primaryTypographyProps={{ variant: "h6" }}
            />
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      ></main>
    </div>
  );
};

export default Menu;
