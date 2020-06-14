import React from "react";
import MenuModal from "./MenuModal";
import Menu from "./Menu";

const Header = (props) => {
  return (
    <div className="header">
      <Menu {...props} />
    </div>
  );
};

export default Header;
