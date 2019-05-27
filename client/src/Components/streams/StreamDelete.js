import React from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../Actions";
import { connect } from "react-redux";
class StreamDelete extends React.Component {
  componentDidMount = () => {
    this.props.fetchStream(this.props.match.params.id);
  };

  actions = () => {
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
          className="ui primary button"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  };

  renderDescription = () => {
    if (!this.props.stream) {
      return "Are you sure you want to delete the stream?";
    }

    return `Are you sure you want to delete the stream with title: ${
      this.props.stream.title
    }`;
  };

  render = () => {
    return (
      <Modal
        title="Delete Stream"
        description={this.renderDescription()}
        actions={this.actions()}
        onDismiss={() => history.push("/")}
      />
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream: fetchStream, deleteStream: deleteStream }
)(StreamDelete);
