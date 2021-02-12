import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import CollectionsIcon from "@material-ui/icons/Collections";
import PortraitIcon from "@material-ui/icons/Portrait";
import ReceiptIcon from "@material-ui/icons/Receipt";
import DescriptionIcon from "@material-ui/icons/Description";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    zIndex: 4
  },
  appBar: {
    backgroundColor: (dark) =>
      dark ? "rgba(40,44,52,.9)" : "rgba(230,230,230, .9)",
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
    color: (dark) => (dark ? "white" : "black"),
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    // opacity: .9,
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: (dark) => (dark ? "#3d424d" : "white"),
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
        className={clsx(useStyles(darkMode).appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(
              useStyles(darkMode).menuButton,
              open && classes.hide
            )}
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
            <ChevronLeftIcon
              style={darkMode ? { color: "white" } : { color: "black" }}
            />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={() => (window.location.href = "#about-me")}>
            <ListItemIcon style={{ color: "inherit" }}>
              <PortraitIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText
              primary={"About Me"}
              primaryTypographyProps={{ variant: "h6" }}
            />
          </ListItem>
          {/* <ListItem
            button
            onClick={() =>
              window.open("https://resume.kylerichardson.tech", "_blank")
            }
          >
            <ListItemIcon style={{ color: "inherit" }}>
              <DescriptionIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText
              primary={"Digital Resume"}
              primaryTypographyProps={{ variant: "h6" }}
            />
          </ListItem> */}
          <ListItem
            button
            onClick={() =>
              window.open(
                "https://docs.google.com/document/d/e/2PACX-1vTRqxugKuzEeFEsaOtUGa4BrzfCsGuhEWNGOPoqQHdGWDVC2GhLmf2BYMMMyQnkkR1gTv12fz1-McEa/pub",
                "_blank"
              )
            }
          >
            <ListItemIcon style={{ color: "inherit" }}>
              <ReceiptIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText
              primary={"Resume"}
              primaryTypographyProps={{ variant: "h6" }}
            />
          </ListItem>
          <ListItem button onClick={() => (window.location.href = "#projects")}>
            <ListItemIcon style={{ color: "inherit" }}>
              <CollectionsIcon fontSize="large" />
            </ListItemIcon>
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
              <EmailIcon fontSize="large" />
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
              <GitHubIcon fontSize="large" />
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
              <LinkedInIcon fontSize="large" />
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
            <ListItemIcon style={{ color: "inherit" }}>
              <ArrowUpwardIcon fontSize="large" />
            </ListItemIcon>
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
