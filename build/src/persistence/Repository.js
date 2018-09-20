"use strict";
exports.__esModule = true;
var Repository = /** @class */ (function () {
    function Repository(tabela) {
        this.tabela = tabela;
    }
    Repository.prototype.adiciona = function (obj, con, callbackThen) {
        con.connect().then(function () {
            con.manager
                .save(obj)
                .then(callbackThen)["catch"](function (err) {
                console.log("---> " + err);
            });
        });
    };
    Repository.prototype.exclui = function (obj, con, callbackThen) {
        con.connect().then(function () {
            con.manager
                .remove(obj)
                .then(callbackThen)["catch"](function (err) {
                console.log("---> " + err);
            });
        });
    };
    Repository.prototype.get = function (id, con, callbackThen) {
        var _this = this;
        con.connect().then(function () {
            con.getRepository(_this.tabela).findOne(id).then(callbackThen)["catch"](function (err) {
                console.log(err);
            });
        });
    };
    Repository.prototype.todos = function (callbackThen, con) {
        var _this = this;
        con.connect().then(function () {
            con.getRepository(_this.tabela).createQueryBuilder().getMany().then(callbackThen)["catch"](function (err) {
                console.log(err);
            });
        });
    };
    return Repository;
}());
exports.Repository = Repository;
