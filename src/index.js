import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MenuContainer from "./MenuContainer.js";

var destination = document.querySelector("#container");

ReactDOM.render (
    <MenuContainer />,
    destination
)