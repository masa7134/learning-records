import React from "react";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const Example = () => {
  const sample1 = (
    <h1 className="greeting">
      Hello World
    </h1>
  );

  // console.log(   React.createElement("h1", {
  //   className: "greeting"
  // }, "Hello World"));

  // React.createElement("h1", {
  //   className: "greeting"
  // }, "Hello World");

  const sample2 = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you.</h2>
    </div>
  );

  _jsxs(
    "div", { 
      children: [
        _jsx("h1", {children: "Hello!" }), 
        _jsx("h2", {children: "Good to see you."})
      ]
    }
  );

  console.log(
    (
      <div>
        <h1>Hello!</h1>
        <h2>Good to see you.</h2>
      </div>
    ).props
  );

  return   _jsxs(
    "div", { 
      children: [
        _jsx("h1", {children: "Hello!" }), 
        _jsx("h2", {children: "Good to see you."})
      ]
    }
  );
};

export default Example;
