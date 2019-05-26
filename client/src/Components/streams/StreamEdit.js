import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { fetchStream, editStream } from "../../Actions";
import StreamForm from "./StreamForm";
class StreamEdit extends React.Component {
  componentDidMount = () => {
    this.props.fetchStream(this.props.match.params.id);
  };

  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  };
  render() {
    console.log(this.props);
    if (!this.props.streams) {
      return <div>Loading..</div>;
    }
    return (
      <div>
        <h3>Edit A Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.streams, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { streams: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream: fetchStream, editStream: editStream }
)(StreamEdit);
