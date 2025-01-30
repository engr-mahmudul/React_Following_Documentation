import { getContacts } from "../contacts.js";
export async function getContactsLoader() {
  const contacts = await getContacts();
  return { contacts };
}
