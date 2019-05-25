import React from "react";
import { Field, reduxForm } from "redux-form"; // Field is a component and reduxForm works the work similar to that of connect

class StreamCreate extends React.Component {
  renderInputTag = formProps => {
    console.log(formProps.meta);
    // console.log(formProps);
    // return <input onChange={formProps.input.onChange} />
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <input {...formProps.input} />
        <div>{formProps.meta.error}</div>
      </div>
    );
  };

  onSubmit = formValues => {
    console.log(formValues);
  };

  render() {
    // console.log(this.props);
    return (
      <form
        className="ui form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
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
        <button className="ui primary button">Submit</button>
      </form>
    );
  }
}

const validateFunc = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

export default reduxForm({
  form: "streamCreate",
  validate: validateFunc
})(StreamCreate);
