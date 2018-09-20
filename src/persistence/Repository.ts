export class Repository {
 tabela: string;

 constructor(tabela: string) {
  this.tabela = tabela;
 }

 adiciona(obj: any, con: any, callbackThen: any): void {
  con.connect().then(() => {
   con.manager
    .save(obj)
    .then(callbackThen).catch((err: string) => {
     console.log("---> " + err);
    });
  });
 }
 
 exclui(obj: any, con: any, callbackThen: any): void {
  con.connect().then(() => {
   con.manager
    .remove(obj)
    .then(callbackThen).catch((err: string) => {
     console.log("---> " + err);
    });
  });
 }
 
 get(id: any, con: any, callbackThen: any): void {
  con.connect().then(() => {
   con.getRepository(this.tabela).findOne(id).then(callbackThen).catch((err: string) => {
    console.log(err);
   });
  });
 }

 todos(callbackThen: any, con: any): void {
  con.connect().then(() => {
   con.getRepository(this.tabela).createQueryBuilder().getMany().then(callbackThen).catch((err: string) => {
    console.log(err);
   });
  });
 }
}
