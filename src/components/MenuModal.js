import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const MenuModal = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="menu-modal">
      <div>
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          <MenuIcon fontSize="large" />
        </div>
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() =>
            (window.location.href = "https://www.kylerichardson.tech")
          }
        >
          Resume
        </MenuItem>
        <MenuItem onClick={handleClose}>About me</MenuItem>
        <MenuItem onClick={() => (window.location.href = "#projects")}>
          Projects
        </MenuItem>
        <MenuItem onClick={() => (window.location.href = "#App-header")}>
          Go to top
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuModal;
