import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faReact,
  faCss3,
  faHtml5,
  faNodeJs
} from "@fortawesome/free-brands-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faReact, faCss3, faHtml5, faNodeJs);

const RenderTool = ({ tool }) => {
  return (
    <span className="icon" title={tool}>
      {tool && <FontAwesomeIcon icon={["fab", tool]} size="2x" />}
    </span>
  );
};

export default RenderTool;
