import React from "react";
import Menu from "./Menu";

const Header = (props) => {
  return (
    <div className="header">
      <Menu {...props} />
    </div>
  );
};

export default Header;
