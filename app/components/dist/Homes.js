"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var Home = function (_a) {
    var id = _a.id;
    return (react_1["default"].createElement("div", { className: "mb-52 md:mb-80", id: id },
        react_1["default"].createElement("div", { className: "flex flex-col md:flex-row justify-center mx-2 items-center mt-10 md:mt-32 " },
            react_1["default"].createElement(image_1["default"], { src: "/img/headshot.jpg", alt: "Josef Shohet's face", width: 580, height: 580, className: "rounded-full mb-2" }),
            react_1["default"].createElement("p", { className: "max-w-[400px] ml-5 text-lg" },
                "Hi, my name is",
                " ",
                react_1["default"].createElement("span", { className: "text-red-900 font-semibold" }, "Josef Shohet"),
                ". Aspiring front-end React developer. Thanks for stopping by! Feel free to look around."))));
};
exports["default"] = Home;
