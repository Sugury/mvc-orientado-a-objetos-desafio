import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection = new ContactsCollection;
  constructor() {}
  processOptions(options: ContactsControllerOptions) {}
}

export { ContactsController };
