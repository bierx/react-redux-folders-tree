import React, { Component } from "react";
import { Field } from "redux-form";
import "../../../Styles/main.css";

import Icon from "react-icons-kit";
import { folder as folderClosed } from "react-icons-kit/fa/folder";
import { folderOpen } from "react-icons-kit/fa/folderOpen";

import RadioField from "../../RadioField/RadioField";
import SmallTooltip from "../SmallTooltip/SmallTooltip";

class FolderItem extends Component {
  constructor(props) {
    super(props);

    this.toggleFolders = this.toggleFolders.bind(this);

    this.state = {};
  }

  toggleFolders = (f, e) => {
    e.stopPropagation();

    this.setState({
      ...this.state,
      isOpen: !this.state.isOpen,
      folder: f.folders
    });

    this.props.onSelectFolder(f);
  };

  render() {
    const { folder, selectedFolder, onSelectFolder } = this.props;

    return (
      <div onClick={e => this.toggleFolders(folder, e)} key={folder.token} className="folder">
        <Icon
          className="icon"
          icon={this.state.isOpen ? folderOpen : !folder.folders.length ? folderOpen : folderClosed}
        />
        <span className="name">{folder.name}</span>
        <Field
          checked={selectedFolder.token === folder.token}
          folder={folder}
          value={folder.token}
          component={RadioField}
          name="folder"
          type="radio"
        />
        {!folder.folders.length && <SmallTooltip text="Empty" />}
        {this.state.isOpen &&
          this.state.folder &&
          this.state.folder.map((nestedFolder, index) => (
            <FolderItem
              onSelectFolder={onSelectFolder}
              key={nestedFolder.token}
              folder={nestedFolder}
              selectedFolder={selectedFolder}
            />
          ))}
      </div>
    );
  }
}

export default FolderItem;
