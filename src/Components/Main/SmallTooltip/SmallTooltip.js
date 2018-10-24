import React, { Component } from "react";

class SmallTooltip extends Component {
  render() {
    const { text } = this.props;

    return (
      <div className="empty-folder">
        <small>{text}</small>
      </div>
    );
  }
}

export default SmallTooltip;
