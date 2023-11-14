"use strict";
exports.__esModule = true;
exports.viewport = exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./globals.css");
var poppins = google_1.Poppins({ weight: ["500"], subsets: ["latin"] });
exports.metadata = {
    title: 'Josef Shohet Portfolio',
    description: 'Josef Shohet Front-End React Portfolio.'
};
exports.viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en", className: "scroll-smooth" },
        React.createElement("body", { className: poppins.className }, children)));
}
exports["default"] = RootLayout;
