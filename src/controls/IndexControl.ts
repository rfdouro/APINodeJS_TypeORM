//import * as express from "express";
import {Router} from "express";

class IndexControl extends Router {
 constructor() {
  super();
  this.initRoutes();
 }

 public initRoutes = (): void => {
  this.get('/', (req, res, next) => {
   res.status(200).send({
    title: "API TypeORM + Express",
    version: "0.0.1"
   });
  });
 }
}

export default IndexControl;


