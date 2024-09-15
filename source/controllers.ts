import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection;

  constructor() {
    this.contacts = new ContactsCollection();
    this.contacts.load();
  }

  processOptions(options: ContactsControllerOptions) {
    if (options.action === "get") {
      // si option tiene un parametro id retorna el objeto con ese id de contacts
      if (options.params.id) {
        return this.contacts.getOneById(options.params.id);
      }
      // caso contrario retornara todos los objetos de contacts
      else {
        return this.contacts.getAll();
      }
    }
    if (options.action === "save") {
      // añade params a la collection de contacts
      this.contacts.addOne(options.params);
      // escribe la collection de contacts en contacts.json
      this.contacts.save();
      return this.contacts.getAll();
    }
    return null;
  }
}

export { ContactsController };
