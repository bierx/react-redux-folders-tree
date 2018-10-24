import React, { Component } from "react";
import Radio from "@material-ui/core/Radio";

class RadioField extends Component {
  componentDidMount() {
    if (this.props) {
      this.props.input.onChange(this.props.folder.token);
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props !== newProps) {
      this.props.input.onChange(this.props.folder.token);
    }
  }
  render() {
    return (
      <Radio
        checked={!!this.props.checked}
        value={this.props.input.value}
        name={this.props.input.name}
        className="radio-button"
      />
    );
  }
}

export default RadioField;
