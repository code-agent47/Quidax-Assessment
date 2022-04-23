"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var SignInPage_1 = require("./components/pages/SignInPage/SignInPage");
var MainLayout_1 = require("./components/pages/MainLayout/MainLayout");
var PrivateRoute_1 = require("./config/PrivateRoute");
function App() {
    return (react_1["default"].createElement(react_router_dom_1.Routes, null,
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(SignInPage_1["default"], null) }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "*", element: react_1["default"].createElement(PrivateRoute_1["default"], null,
                react_1["default"].createElement(MainLayout_1["default"], null)) })));
}
exports["default"] = App;
