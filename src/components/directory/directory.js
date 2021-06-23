import { React, Component } from "react";

import MenuItem from "./../menu-item/menu-item";

import DIR_DATA from "./directory.data";

import "./directory.scss";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: DIR_DATA,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
