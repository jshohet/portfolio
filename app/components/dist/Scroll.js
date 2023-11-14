"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ScrollHelper_1 = require("./ScrollHelper");
var fa_1 = require("react-icons/fa");
function ScrollHelper() {
    var ref = react_1["default"].useRef(null);
    var isShown = ScrollHelper_1.isVisible(ref);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { ref: ref }),
        react_1["default"].createElement("div", { className: "fixed text-center ml-2 mt-52 hidden sm:block md:ml-5 lg:ml-9 text-zinc-300" },
            react_1["default"].createElement("div", { className: "h-10" }, !isShown && (react_1["default"].createElement("button", { onClick: function () {
                    return window.scrollTo({
                        left: 0,
                        top: 0,
                        behavior: "smooth"
                    });
                } },
                react_1["default"].createElement(fa_1.FaAngleDown, { size: 30, className: "m-auto" }),
                "Scroll to Top"))))));
}
exports["default"] = ScrollHelper;
