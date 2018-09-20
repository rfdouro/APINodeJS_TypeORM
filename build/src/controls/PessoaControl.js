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
var express_1 = require("express");
var Pessoa_1 = require("../models/Pessoa");
var UtilORM_1 = require("../persistence/UtilORM");
var Repository_1 = require("../persistence/Repository");
var PessoaControl = /** @class */ (function (_super) {
    __extends(PessoaControl, _super);
    function PessoaControl() {
        var _this = _super.call(this) || this;
        _this.initRoutes = function () {
            _this.get('/', function (req, res, next) {
                var pessoas = null;
                var con = UtilORM_1["default"].getConexao();
                var r = new Repository_1.Repository("Pessoa");
                r.todos(function (pessoas) {
                    con.close();
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(pessoas));
                }, con);
            });
            _this.get('/:id', function (req, res, next) {
                var pessoa = null;
                var con = UtilORM_1["default"].getConexao();
                var r = new Repository_1.Repository("Pessoa");
                r.get(req.params.id, con, function (pessoa) {
                    con.close();
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(pessoa));
                });
            });
            _this.get('/adiciona', function (req, res, next) {
                var con = UtilORM_1["default"].getConexao();
                var pessoa = new Pessoa_1.Pessoa();
                pessoa.nome = req.query.nome;
                var r = new Repository_1.Repository("Pessoa");
                r.adiciona(pessoa, con, function () {
                    con.close();
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify("adicionado"));
                });
            });
            _this.get('/exclui', function (req, res, next) {
                var con = UtilORM_1["default"].getConexao();
                var pessoa = new Pessoa_1.Pessoa();
                pessoa.id = req.query.id;
                var r = new Repository_1.Repository("Pessoa");
                r.exclui(pessoa, con, function () {
                    con.close();
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify("excluido"));
                });
            });
        };
        _this.initRoutes();
        return _this;
    }
    return PessoaControl;
}(express_1.Router));
exports.PessoaControl = PessoaControl;
