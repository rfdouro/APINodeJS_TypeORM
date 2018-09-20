"use strict";
exports.__esModule = true;
var App_1 = require("./src/App");
var PORT = 3000;
var Server = /** @class */ (function () {
    function Server() {
    }
    Server.prototype.init = function () {
        App_1["default"].app.listen(PORT, function () {
            console.log('Servidor operando na porta ' + PORT);
        });
    };
    return Server;
}());
new Server().init();
