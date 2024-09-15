// este import existe solo para que tsc lo tome y lo copie a /build
import { readFileSync, writeFileSync } from "jsonfile";
import "./contacts.json";
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"
// importo el modulo path para crear la ruta al archivo
import * as path from "path";
class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  // collection donde se guardan los contactos
  listContacts:Contact[] = [];
  constructor() {


  }
  // carga los contactos de contacts.json y la guarda en la propiedad listContact;
  load() {
    // obtiene la ruta de contacts.json 
    const filePath = path.join(__dirname, "contacts.json");
    // lee el archivo contacts.json
    const readJson = readFileSync(filePath);
    // asigna el valor de readJson  a listContacts
     this.listContacts = readJson;
  }
  // retorna todos los contactos guardados en listContacts
  getAll() {
    return this.listContacts;
  }
  // añade un contacto a listContacts
  addOne(contact:Contact) {
    this.listContacts.push(contact);
  }
  // Guarda el contenido de listContacts en contacts.json
  save() {
    // obtiene la ruta de contacts.json
    const filePath = path.join(__dirname,"contacts.json"); 
    // reemplaza el contenido de contacts.json por el de listContacts separando cada objeto por dos saltos de linea. Para serlo mas legible.
    writeFileSync(filePath,this.listContacts,{spaces:2});
    
  }
  // retorna el contacto que tenga el id proporcionado.
  getOneById(id:number) {
    return this.listContacts.find((element) => element.id === id);


  }


  
}
export {ContactsCollection };
