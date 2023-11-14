"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var io_1 = require("react-icons/io");
var Contact = function (_a) {
    var id = _a.id;
    return (react_1["default"].createElement("div", { id: id },
        react_1["default"].createElement("h1", { className: "font-bold text-3xl my-8 text-center" }, "Contact Info"),
        react_1["default"].createElement("div", { className: "flex justify-center" },
            react_1["default"].createElement("a", { href: "mailto: joe.shohet@gmail.com?subject=Email from Portfolio", target: "_blank", className: "flex flex-row items-center cursor-pointer" },
                react_1["default"].createElement(io_1.IoMdMailOpen, { size: 30, className: "text-cyan-400 mr-1" }),
                react_1["default"].createElement("h2", { className: "" }, "Email me"))),
        react_1["default"].createElement("div", { className: "flex justify-center my-2" },
            react_1["default"].createElement("a", { href: "https://www.linkedin.com/in/josef-shohet", className: "flex flex-row items-center cursor-pointer", target: "_blank" },
                react_1["default"].createElement(fa_1.FaLinkedin, { size: 30, className: "text-cyan-500 mr-1" }),
                react_1["default"].createElement("h2", null, "LinkedIn"))),
        react_1["default"].createElement("div", { className: "flex flex-row items-center justify-center" },
            react_1["default"].createElement(fa_1.FaPhoneVolume, { size: 25, className: "text-red-700 mr-1" }),
            react_1["default"].createElement("h2", null, "(617) 610-1795 "))));
};
exports["default"] = Contact;
