"use strict";
exports.__esModule = true;
//https://itnext.io/building-restful-web-apis-with-node-js-express-mongodb-and-typescript-part-1-2-195bdaf129cf
var express = require("express");
var bodyParser = require("body-parser");
var IndexControl_1 = require("./controls/IndexControl");
var PessoaControl_1 = require("./controls/PessoaControl");
var UtilORM_1 = require("./persistence/UtilORM");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.config();
        var con = UtilORM_1["default"].getConexao();
        console.log(con.connect().then(function () {
            console.log(con.isConnected);
            con.close();
            /*let pessoa = new Pessoa();
            pessoa.nome = "Joao";
         
            return con.manager
             .save(pessoa)
             .then(pessoa => {
              console.log("Pessoa foi adicionada, seu id e ", pessoa.id);
             });*/
        }));
    }
    App.prototype.config = function () {
        //app.use(bodyParser());
        this.app.use(bodyParser.urlencoded({ extended: true })); // usado para parsing de um form application/x-www-form-urlencoded
        this.app.use(bodyParser.json()); // usado para fazer parsing de um application/json
        // adiciona headers para liberar o 'consumo' do ws
        this.app.use(function (req, res, next) {
            // website que deseja permitir a conexão
            //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
            res.setHeader('Access-Control-Allow-Origin', '*');
            // métodos de requisição que deseja permitir
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            // solicita os cabeçalhos de requisição que deseja permitir
            //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            // coloca como verdadeiro se precisar que o website inclua cookies na requisição 
            // e envie até a API (no caso de usar session)
            res.setHeader('Access-Control-Allow-Credentials', true);
            // passa oara o próximo quadro do middleware
            next();
        });
        //define as rotas
        this.app.use('/', (new IndexControl_1["default"]()));
        this.app.use('/pessoa', (new PessoaControl_1.PessoaControl()));
    };
    return App;
}());
exports["default"] = new App();
