import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import PropTypes from "prop-types";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

// const App = () => (
//   <div style={styles}>
//     <Hello name="CodeSandbox" />
//     <h2>Start editing to see some magic happen {'\u2728'}</h2>
//   </div>
// );

// render(<App />, document.getElementById('root'));

// const element = React.createElement("div", {
//   className: "container",
//   children: "Hello World"
// });
// console.log(element);
// render(element, document.getElementById("root"));
// const content = "Hello World";
// const myClass = "container";
// const props = {
//   className: myClass,
//   children: content
// };
// const element = (
//   <div {...props} className="override">
//     Override
//   </div>
// );
// const Message = props => <div>{props.children}</div>;
// const element = (
//   <div className="container">
//     <Message>
//       Hello World
//       <Message>Teste</Message>
//     </Message>
//     <Message>Goodbye World</Message>
//   </div>
// );
// render(element, document.getElementById("root"));

function SayHello(props) {
  return (
    <div>
      Hello {props.firstName} {props.lastName || "Unknown"}
    </div>
  );
}

// const PropTypes = {
//   string(props, propName, componentName) {
//     if (typeof props[propName] !== "string") {
//       return new Error(
//         `Você deveria ter passado uma string no ${propName} para o ${componentName}, mas você passou ${typeof props[
//           propName
//         ]}`
//       );
//     }
//   }
// };

SayHello.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};
render(<SayHello firstName={true} />, document.getElementById("root"));
