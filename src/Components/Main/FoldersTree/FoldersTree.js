import React, { Component } from "react";
import { reduxForm } from "redux-form";
import "../../../Styles/main.css";

import FolderItem from "./FolderItem";

class FoldersTree extends Component {
  constructor(props) {
    super(props);

    this.onSelectFolder = this.onSelectFolder.bind(this);

    this.state = {
      selectedFolder: {}
    };
  }

  onSelectFolder(folder) {
    this.setState({
      ...this.state,
      selectedFolder: { ...folder }
    });

    if (this.props.onFolderSelect) this.props.onFolderSelect(folder);
  }

  render() {
    return (
      <div className="folders-tree">
        {this.props.data.map((folder, index) => (
          <FolderItem onSelectFolder={this.onSelectFolder} key={folder.token} folder={folder} selectedFolder={this.state.selectedFolder} />
        ))}
      </div>
    );
  }
}

export default reduxForm({
  form: "FoldersTree"
})(FoldersTree);
