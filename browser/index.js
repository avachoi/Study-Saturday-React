import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import Main from "./component/Main";

console.log("Hello Webpack!");

ReactDOM.render(<Main />, document.getElementById("app"));
