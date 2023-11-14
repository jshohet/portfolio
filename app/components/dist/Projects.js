"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var fi_1 = require("react-icons/fi/");
var bs_1 = require("react-icons/bs/");
var bi_1 = require("react-icons/bi");
var tb_1 = require("react-icons/tb");
var Projects = function (_a) {
    var id = _a.id;
    return (react_1["default"].createElement("div", { id: id },
        react_1["default"].createElement("h1", { className: "font-bold text-3xl my-8 text-center" }, "Projects"),
        react_1["default"].createElement("div", { className: "ml-52" },
            react_1["default"].createElement("div", { className: "flex flex-row mb-10" },
                react_1["default"].createElement(image_1["default"], { src: "/img/chewplushdemo.PNG", width: 300, height: 300, alt: "Chew plush store demo image.", className: "hover:transition-all hover:scale-125 hover:ease-in-out hover:duration-500 mr-10" }),
                react_1["default"].createElement("div", { className: "max-w-[50%]" },
                    react_1["default"].createElement("h2", { className: "font-bold text-xl mb-2" }, "Chew Plush Store"),
                    react_1["default"].createElement("p", { className: "mb-2" }, "Your one stop shop for any plushies you want. No, you cannot actually purchase any."),
                    react_1["default"].createElement("div", { className: "flex flex-row mb-2" },
                        react_1["default"].createElement(bi_1.BiLogoTypescript, { size: 30, className: "text-cyan-400" }),
                        react_1["default"].createElement(bi_1.BiLogoTailwindCss, { size: 30, className: "text-cyan-600" }),
                        react_1["default"].createElement(tb_1.TbBrandNextjs, { size: 30, className: "text-black" })),
                    react_1["default"].createElement("a", { href: "https://chew-plush-store.vercel.app/", className: "cursor-pointer flex flex-row mb-1 bg-slate-400 text-white w-fit rounded-md p-0.5" },
                        "Try out this site",
                        " ",
                        react_1["default"].createElement(fi_1.FiArrowUpRight, { className: "ml-1 mt-0.5 text-black", size: 18 })),
                    react_1["default"].createElement("a", { href: "https://github.com/jshohet/plush-store", className: "cursor-pointer flex flex-row mb-1 bg-slate-400 text-white w-fit rounded-md p-0.5", target: "_blank" },
                        "Source code on github",
                        " ",
                        react_1["default"].createElement(bs_1.BsGithub, { className: "ml-1 mt-0.5 text-black" })))),
            react_1["default"].createElement("div", { className: "flex flex-row mb-10" },
                react_1["default"].createElement(image_1["default"], { src: "/img/currencyexchangedemo.PNG", width: 300, height: 300, alt: "Currency exchange demo.", className: "hover:transition-all hover:scale-125 hover:ease-in-out hover:duration-500 mr-10" }),
                react_1["default"].createElement("div", { className: "max-w-[50%]" },
                    react_1["default"].createElement("h2", { className: "font-bold text-xl mb-2" }, "Exchange Global"),
                    react_1["default"].createElement("p", { className: "mb-2" }, "Exchange Global is a sleek, fast way to look up currency rates for almost any currency, including crypto."),
                    react_1["default"].createElement("div", { className: "flex flex-row mb-2" },
                        react_1["default"].createElement(bi_1.BiLogoTypescript, { size: 30, className: "text-cyan-400" }),
                        react_1["default"].createElement(bi_1.BiLogoTailwindCss, { size: 30, className: "text-cyan-600" }),
                        react_1["default"].createElement(tb_1.TbBrandNextjs, { size: 30, className: "text-black" })),
                    react_1["default"].createElement("a", { href: "https://josef-currency-exchange.vercel.app/", className: "cursor-pointer flex flex-row mb-1 bg-slate-400 text-white w-fit rounded-md p-0.5" },
                        "Try out this site!",
                        " ",
                        react_1["default"].createElement(fi_1.FiArrowUpRight, { className: "ml-1 mt-0.5 text-black", size: 18 })),
                    react_1["default"].createElement("a", { href: "https://github.com/jshohet/currency-app", className: "cursor-pointer flex flex-row mb-1 bg-slate-400 text-white w-fit rounded-md p-0.5", target: "_blank" },
                        "Source code on github",
                        " ",
                        react_1["default"].createElement(bs_1.BsGithub, { className: "ml-1 mt-0.5 text-black" })))),
            react_1["default"].createElement("div", { className: "flex flex-row" },
                react_1["default"].createElement(image_1["default"], { src: "/img/todolistdemo.PNG", width: 300, height: 300, alt: "To-do list demo.", className: "hover:transition-all hover:scale-125 hover:ease-in-out hover:duration-500 mr-10" }),
                react_1["default"].createElement("div", { className: "max-w-[50%]" },
                    react_1["default"].createElement("h2", { className: "font-bold text-xl mb-2" }, "Task Driver"),
                    react_1["default"].createElement("p", { className: "mb-2" }, "Task driver is a compact to-do list that stays even when you leave the page."),
                    react_1["default"].createElement("div", { className: "flex flex-row mb-2" },
                        react_1["default"].createElement(bi_1.BiLogoTypescript, { size: 30, className: "text-cyan-400" }),
                        react_1["default"].createElement(bi_1.BiLogoTailwindCss, { size: 30, className: "text-cyan-600" }),
                        react_1["default"].createElement(tb_1.TbBrandNextjs, { size: 30, className: "text-black" })),
                    react_1["default"].createElement("a", { href: "https://josef-todo-list.vercel.app/", className: "cursor-pointer flex flex-row mb-1 bg-slate-400 text-white w-fit rounded-md p-0.5" },
                        "Try out this site!",
                        " ",
                        react_1["default"].createElement(fi_1.FiArrowUpRight, { className: "ml-1 mt-0.5 text-black", size: 18 })),
                    react_1["default"].createElement("a", { href: "https://github.com/jshohet/todo-list", className: "cursor-pointer flex flex-row mb-1 bg-slate-400 text-white w-fit rounded-md p-0.5", target: "_blank" },
                        "Source code on github",
                        " ",
                        react_1["default"].createElement(bs_1.BsGithub, { className: "ml-1 mt-0.5 text-black" })))))));
};
exports["default"] = Projects;
