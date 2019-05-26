import React from "react";
import { Field, reduxForm } from "redux-form"; // Field is a component and reduxForm works the work similar to that of connect

class StreamForm extends React.Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderInputTag = formProps => {
    // console.log(formProps.meta);
    // console.log(formProps);
    // return <input onChange={formProps.input.onChange} />
    const _className = `field ${
      formProps.meta.error && formProps.meta.touched ? "error" : ""
    }`;
    return (
      <div className={_className}>
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete="off" />
        {/*formProps.meta.error*/}
        {this.renderError(formProps.meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    // console.log(formValues);
    this.props.onSubmit(formValues);
  };

  render() {
    // console.log(this.props);
    return (
      <form
        className="ui form error"
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
})(StreamForm);
