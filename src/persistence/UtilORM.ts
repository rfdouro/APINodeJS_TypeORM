import "reflect-metadata";
import {Connection, ConnectionManager} from "typeorm";
import {Pessoa} from "../models/Pessoa";
import {Animal} from "../models/Animal";

class UtilORM {
 public static conexao: Connection;

 static OPCON = {
  type: "sqlite",
  database: "testeORM.sqlite",
  //entities: ["./src/models/*.js"],
  entities: [Pessoa, Animal],
  logging: true,
  synchronize: true
 };

 public static getConexao(): Connection {
  if (this.conexao == null || (this.conexao != null && !this.conexao.isConnected)) {
   const c = new ConnectionManager();
   this.conexao = c.create(this.OPCON);
  }
  return this.conexao;
 }
}

export default UtilORM;

