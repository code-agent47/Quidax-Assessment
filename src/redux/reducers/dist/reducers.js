"use strict";
exports.__esModule = true;
exports.rootReducer = void 0;
var redux_1 = require("redux");
var AlertReducer_1 = require("./AlertReducer");
var AuthReducer_1 = require("./AuthReducer");
var DashboardReducer_1 = require("./DashboardReducer");
var SubmitReducer_1 = require("./SubmitReducer");
var StepReducer_1 = require("./StepReducer");
var signUpReducer_1 = require("./signUpReducer");
var SearchReducer_1 = require("./SearchReducer");
var ExportReducer_1 = require("./ExportReducer");
var ReceptionReducer_1 = require("./ReceptionReducer");
exports.rootReducer = redux_1.combineReducers({
    signinReducer: AuthReducer_1["default"],
    signUpReducer: signUpReducer_1["default"],
    dashboardReducer: DashboardReducer_1["default"],
    submitReducer: SubmitReducer_1["default"],
    stepReducer: StepReducer_1["default"],
    alertReducer: AlertReducer_1["default"],
    SearchReducer: SearchReducer_1["default"],
    ExportReducer: ExportReducer_1["default"],
    receptionReducer: ReceptionReducer_1["default"]
});
