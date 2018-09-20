import {Router} from "express";
import {Pessoa} from "../models/Pessoa"
import UtilORM from "../persistence/UtilORM";
import {Repository} from "../persistence/Repository";

export class PessoaControl extends Router {
 constructor() {
  super();
  this.initRoutes();
 }

 public initRoutes = (): void => {
  this.get('/', (req, res, next) => {
   var pessoas = null;
   var con = UtilORM.getConexao();
   var r = new Repository("Pessoa");
   r.todos((pessoas) => {
    con.close();
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(pessoas));
   }, con);
  });
  
  this.get('/:id', (req, res, next) => {
   var pessoa = null;
   var con = UtilORM.getConexao();
   var r = new Repository("Pessoa");
   r.get(req.params.id, con, (pessoa) => {
    con.close();
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(pessoa));
   });
  });

  this.get('/adiciona', (req, res, next) => {
   var con = UtilORM.getConexao();
   let pessoa = new Pessoa();
   pessoa.nome = req.query.nome;
   var r = new Repository("Pessoa");
   r.adiciona(pessoa, con, () => {
    con.close();
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify("adicionado"));
   });
  });
  
  this.get('/exclui', (req, res, next) => {
   var con = UtilORM.getConexao();
   let pessoa = new Pessoa();
   pessoa.id = req.query.id;
   var r = new Repository("Pessoa");
   r.exclui(pessoa, con, () => {
    con.close();
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify("excluido"));
   });
  });
 }
}


