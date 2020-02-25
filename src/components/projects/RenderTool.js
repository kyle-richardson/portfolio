import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const RenderTool = ({ tool }) => {
  return (
    <span className="icon" title={tool}>
      {tool && <FontAwesomeIcon icon={["fab", tool]} size="2x" />}
    </span>
  );
};

export default RenderTool;
