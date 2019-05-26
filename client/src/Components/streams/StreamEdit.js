import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../Actions";
class StreamEdit extends React.Component {
  componentDidMount = () => {
    this.props.fetchStream(this.props.match.params.id);
  };
  render() {
    console.log(this.props);
    if (!this.props.streams) {
      return <div>Loading..</div>;
    }
    return <div>{this.props.streams.title}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { streams: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream: fetchStream }
)(StreamEdit);
