import React, { Component } from "react";
import FoldersTree from "./Components/Main/FoldersTree/FoldersTree";
import { getFolders } from "./Services/DirectoriesServices";

class App extends Component {
  constructor(props) {
    super(props);

    this.applySelected = this.applySelected.bind(this);

    this.state = {
      allFolders: getFolders()
    };
  }

  applySelected(selected) {
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
          <FoldersTree onFolderSelect={this.applySelected} data={this.state.allFolders} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
