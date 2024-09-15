import { updateContactList } from './src/dom.js';
import { handleFormSubmit, handleContactListClick, handleFilter, handleClearFilter } from './src/events.js';
import { getContacts } from './src/storage.js';

document.addEventListener('DOMContentLoaded', () => {
  const contacts = getContacts();
  const contactList = document.getElementById('contactList');
  const contactForm = document.getElementById('contacts');
  const filterInput = document.getElementById('filter');
  const clearFilterBtn = document.getElementById('clearFilterBtn');

  updateContactList(contacts, contactList);
  handleFormSubmit(contactForm, contacts, contactList);
  handleContactListClick(contactList, contacts);
  handleFilter(filterInput, contacts, contactList);
  handleClearFilter(clearFilterBtn, filterInput, contacts, contactList);
});

