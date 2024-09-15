import { ContactsController, ContactsControllerOptions } from "./controllers";
// importa minimist para parsear argumentos de controllers.ts
const  minimist = require("minimist");
function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const args = minimist (argv);
 
 

  const options: ContactsControllerOptions =  {
    action: args.action,
  
    params: JSON.parse(args.params ||  "{}" ),
  };
  
  return options;
}

function main() {
  // utiliza la function parseaParams asi parsea los argumentos enviados de la terminal
  const options = parseaParams(process.argv.slice(2));
   // instancia ContactsController();
   const iC = new ContactsController();
   // Invoca a su metodo processOptions
   const result = iC.processOptions(options);
  console.log("result",result);

  //console.log (result);
}

main();
