"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Coursework = function (_a) {
    var id = _a.id;
    return (react_1["default"].createElement("div", { id: id },
        react_1["default"].createElement("h1", { className: "font-bold text-3xl my-8 text-center" }, "Coursework"),
        react_1["default"].createElement("div", { className: "flex flex-col items-center mb-8" },
            react_1["default"].createElement("h2", { className: "font-bold text-xl mb-2" }, "Notable Courses:"),
            react_1["default"].createElement("ul", null,
                react_1["default"].createElement("li", null,
                    "FreeCodeCamp React Course - ",
                    react_1["default"].createElement("span", { className: "italic" }, "50 hours")),
                react_1["default"].createElement("li", null,
                    "Tim Corey C# Master Course -",
                    " ",
                    react_1["default"].createElement("span", { className: "italic" }, "200 hours")),
                react_1["default"].createElement("li", null,
                    "Tim Corey Web Dev Master Course -",
                    react_1["default"].createElement("span", { className: "italic" }, "100 hours")),
                react_1["default"].createElement("li", null,
                    "Tim Corey Youtube Project Compilations -",
                    " ",
                    react_1["default"].createElement("span", { className: "italic" }, "150 hours")))),
        react_1["default"].createElement("div", { className: "mb-2 flex flex-col items-center" },
            react_1["default"].createElement("h3", { className: "font-bold text-lg my-2" }, "Various other subjects explored:"),
            react_1["default"].createElement("ul", { className: "text-center" },
                react_1["default"].createElement("li", null, "TailwindCSS"),
                react_1["default"].createElement("li", null, "Bootstrap"),
                react_1["default"].createElement("li", null, "Next.js"),
                react_1["default"].createElement("li", null, "TypeScript")),
            react_1["default"].createElement("h3", { className: "font-bold text-lg mt-2" }, "Currently exploring: "),
            react_1["default"].createElement("ul", { className: "text-center" },
                react_1["default"].createElement("li", null, "React animations"),
                react_1["default"].createElement("li", null, "Redux in React/Next.js"),
                react_1["default"].createElement("li", null, "SQL"),
                react_1["default"].createElement("li", null, "Node.js")))));
};
exports["default"] = Coursework;
