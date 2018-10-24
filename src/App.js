import React, { Component } from "react";

import FoldersTree from "./Components/Main/FoldersTree/FoldersTree";

import { getFolders } from "./Services/DirectoriesServices";

class App extends Component {
  constructor(props) {
    super(props);

    this.applSelected = this.applSelected.bind(this);

    this.state = {
      allFolders: getFolders()
    };
  }

  applSelected(selected) {
    this.setState({
      ...this.state,
      currentFodler: selected 
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.currentFodler && <p>current fodler name: {this.state.currentFodler.name}</p>}
        <div className="App">
          <FoldersTree onFolderSelect={this.applSelected} data={this.state.allFolders} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
