import React from "react";
import ReactDom from "react-dom";

const FieldSet = ({ legend, children: content }) => (
  <React.Fragment>
    <fieldset>
      <legend>{legend}</legend>
      {content}
    </fieldset>
    <br />
  </React.Fragment>
);

const SimpleFormInput = () => {
  const [text, setText] = React.useState("Default Text");

  const inputHandler = evt => {
    // The input value is free !
    // COMMENT AFTER TESTSTING
    setText(evt.target.value);
  };

  return (
    <React.Fragment>
      <label>
        Your text is <code>{text}</code>
      </label>
      <br />
      <input onChange={inputHandler} placeholder="Label is updated onChange" />
    </React.Fragment>
  );
};

const ControlledFormInput = () => {
  const [text, setText] = React.useState("Default Text");

  const inputHandler = evt => {
    // The input value is controlled by the state !
    // COMMENT AFTER TESTSTING
    setText(evt.target.value);
  };

  return (
    <React.Fragment>
      <label>
        Your text is <code>{text}</code>
      </label>
      <br />
      <input
        value={text}
        onChange={inputHandler}
        placeholder="Label is updated onChange"
      />
    </React.Fragment>
  );
};

const GenericControlledFormInput = () => {
  const [values, setValues] = React.useState({ name: "", email: "" });

  const createHandlderFor = key => evt =>
    setValues({ ...values, [key]: evt.target.value });

  return (
    <React.Fragment>
      <label>
        Your text is <code>{values.name}</code>
      </label>
      <br />
      <input
        value={values.name}
        onChange={createHandlderFor("name")}
        placeholder="Label is updated onChange"
      />
      <hr />
      <label>
        Your text is <code>{values.email}</code>
      </label>
      <br />
      <input
        value={values.email}
        onChange={createHandlderFor("email")}
        placeholder="Label is updated onChange"
      />
    </React.Fragment>
  );
};

const DynamicInputs = () => {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    zipCode: "",
    gender: ""
  });

  const createHandlderFor = key => evt =>
    setValues({ ...values, [key]: evt.target.value });

  const Input = ({ label, value, handler }) => (
    <React.Fragment>
      <label>
        {label.toUpperCase()} <code>{value}</code>
      </label>
      <br />
      <input
        value={value}
        onChange={handler}
        placeholder="Label is updated onChange"
      />
      <hr />
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {Object.keys(values).map((valueKey, num) => (
        <Input
          label={valueKey}
          value={values[valueKey]}
          handler={createHandlderFor(valueKey)}
        />
      ))}
    </React.Fragment>
  );
};

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FieldSet legend="Simple Form Input">
          <SimpleFormInput />
        </FieldSet>
        <FieldSet legend="Controlled Form Input">
          <ControlledFormInput />
        </FieldSet>
        <FieldSet legend="Generic Controlled Form Inputs">
          <GenericControlledFormInput />
        </FieldSet>
        <FieldSet legend="Generic Controlled Form Inputs">
          <DynamicInputs />
        </FieldSet>
      </React.Fragment>
    );
  }
}

const root = document.getElementById("root");

ReactDom.render(<App />, root);
