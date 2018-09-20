"use strict";
exports.__esModule = true;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var Pessoa_1 = require("../models/Pessoa");
var Animal_1 = require("../models/Animal");
var UtilORM = /** @class */ (function () {
    function UtilORM() {
    }
    UtilORM.getConexao = function () {
        if (this.conexao == null || (this.conexao != null && !this.conexao.isConnected)) {
            var c = new typeorm_1.ConnectionManager();
            this.conexao = c.create(this.OPCON);
        }
        return this.conexao;
    };
    UtilORM.OPCON = {
        type: "sqlite",
        database: "testeORM.sqlite",
        //entities: ["./src/models/*.js"],
        entities: [Pessoa_1.Pessoa, Animal_1.Animal],
        logging: true,
        synchronize: true
    };
    return UtilORM;
}());
exports["default"] = UtilORM;
