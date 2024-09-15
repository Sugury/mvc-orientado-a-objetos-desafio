import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";
import * as contactsObject from "./contacts.json";



test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController();
  t.truthy(controller); // Verifica que el controlador se haya instanciado correctamente
});

/*
test("Testeo el constructor del controller", (t) => {
  const mockC = new ContactsController();
  const mockCC = new ContactsCollection();
  mockCC.load();
  t.deepEqual(mockCC.getAll(), mockC.contacts.getAll());
});
*/

test("testeo processOptions con get y un id", (t) => {
  const mockC = new ContactsController();
  const options: ContactsControllerOptions = { action: "get", params: { id: 1 } };
  // compara el id del objeto params con el que esta dentro de la propiedad contacts
  t.deepEqual(mockC.processOptions(options), mockC.contacts.getOneById(1));
});

test('testeo processOptions con get pero sin id', t => {
 
  const mockC = new ContactsController();
  const options: ContactsControllerOptions = { action: 'get', params: {} };
  const result = mockC.processOptions(options);
  t.deepEqual(result,mockC.contacts.listContacts);
});

test("Testeo processOptions con save", t => {
  const mockC = new ContactsController();
  const newContact = { id: 70, name: 'Charlie' };
  const options: ContactsControllerOptions = { action: 'save', params: newContact };
  mockC.processOptions(options);
  // evalua si el contacto guardado forma parte de contacts buscandolo con su id
  t.deepEqual(newContact, mockC.contacts.getOneById(70));
});
