"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Header = function () {
    return (react_1["default"].createElement("div", { className: "flex flex-row justify-evenly shadow-lg h-24 items-center" },
        react_1["default"].createElement("a", { href: "#home" },
            react_1["default"].createElement("h2", null, "Home")),
        react_1["default"].createElement("a", { href: "#projects" },
            react_1["default"].createElement("h2", null, "Projects")),
        react_1["default"].createElement("a", { href: "#about" },
            react_1["default"].createElement("h2", null, "About")),
        react_1["default"].createElement("a", { href: "#coursework" },
            react_1["default"].createElement("h2", null, "Coursework"))));
};
exports["default"] = Header;
