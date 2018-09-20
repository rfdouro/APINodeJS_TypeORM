"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//import * as express from "express";
var express_1 = require("express");
var IndexControl = /** @class */ (function (_super) {
    __extends(IndexControl, _super);
    function IndexControl() {
        var _this = _super.call(this) || this;
        _this.initRoutes = function () {
            _this.get('/', function (req, res, next) {
                res.status(200).send({
                    title: "API TypeORM + Express",
                    version: "0.0.1"
                });
            });
        };
        _this.initRoutes();
        return _this;
    }
    return IndexControl;
}(express_1.Router));
exports["default"] = IndexControl;
