import React from "react";
import Modal from "../Modal";
class StreamDelete extends React.Component {
  actions = () => {
    return (
      <React.Fragment>
        <button className="ui primary button">Delete</button>
        <button className="ui button">Cancel</button>
      </React.Fragment>
    );
  };

  render = () => {
    return (
      <div>
        Stream Delete
        <Modal
          title="Delete Stream"
          description="Are you sure you want to delete the stream?"
          actions={this.actions()}
        />
      </div>
    );
  };
}

export default StreamDelete;
