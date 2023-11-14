"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var Home = function (_a) {
    var id = _a.id;
    return (react_1["default"].createElement("div", { className: "mb-80", id: id },
        react_1["default"].createElement("div", { className: "flex flex-row justify-center items-center mt-32 " },
            react_1["default"].createElement(image_1["default"], { src: "/img/headshot.jpg", alt: "Josef Shohet's face", width: 600, height: 600, className: "rounded-full" }),
            react_1["default"].createElement("p", { className: "max-w-[400px] ml-5 text-lg" },
                "Hi, my name is",
                " ",
                react_1["default"].createElement("span", { className: "text-red-900 font-semibold" }, "Josef Shohet"),
                ". Aspiring front-end React developer. Thanks for stopping by! Feel free to look around."))));
};
exports["default"] = Home;
