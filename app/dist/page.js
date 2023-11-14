"use strict";
exports.__esModule = true;
var Header_1 = require("./components/Header");
var Homes_1 = require("./components/Homes");
var Projects_1 = require("./components/Projects");
var About_1 = require("./components/About");
var Coursework_1 = require("./components/Coursework");
var Footer_1 = require("./components/Footer");
var Contact_1 = require("./components/Contact");
function Home() {
    return (React.createElement("main", null,
        React.createElement(Header_1["default"], null),
        React.createElement(Homes_1["default"], { id: "home" }),
        React.createElement(Projects_1["default"], { id: "projects" }),
        React.createElement(About_1["default"], { id: "about" }),
        React.createElement(Coursework_1["default"], { id: "coursework" }),
        React.createElement(Contact_1["default"], { id: "contact" }),
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = Home;
