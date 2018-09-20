import app from "./src/App";
const PORT = 3000;


class Server {
 init(): void {
  app.app.listen(PORT, () => {
   console.log('Servidor operando na porta ' + PORT);
  });
 }
}

new Server().init();

