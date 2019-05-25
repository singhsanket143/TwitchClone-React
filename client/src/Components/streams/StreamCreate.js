import React from "react";
import { Field, reduxForm } from "redux-form"; // Field is a component and reduxForm works the work similar to that of connect

class StreamCreate extends React.Component {
  renderInputTag = formProps => {
    // console.log(formProps);
    // return <input onChange={formProps.input.onChange} />
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <input {...formProps.input} />
      </div>
    );
  };

  render() {
    // console.log(this.props);
    return (
      <form className="ui form">
        <Field
          name="title"
          component={this.renderInputTag}
          label="Enter Title"
        />
        <Field
          name="description"
          component={this.renderInputTag}
          label="Enter Description"
        />
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate"
})(StreamCreate);
