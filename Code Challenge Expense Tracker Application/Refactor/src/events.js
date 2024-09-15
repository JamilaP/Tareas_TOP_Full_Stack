import { updateContactList } from './dom.js';
import { saveContacts, getContacts } from './storage.js';
import { validateContact } from './validation.js';

export function handleFormSubmit(contactForm, contacts, contactList) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const terms = document.getElementById('terms').checked;

    const validationError = validateContact(name, phone, terms);
    if (validationError) {
      alert(validationError);
      return;
    }

    const newContact = { id: Date.now(), name, phone };
    contacts.push(newContact);
    saveContacts(contacts);
    updateContactList(contacts, contactList);
    contactForm.reset();
  });
}

export function handleContactListClick(contactList, contacts) {
  contactList.addEventListener('click', function (e) {
    const contactId = e.target.parentElement.getAttribute('data-id');
    if (e.target.classList.contains('delete-btn')) {
      // Eliminar contacto
      const updatedContacts = contacts.filter(contact => contact.id !== Number(contactId));
      saveContacts(updatedContacts);
      updateContactList(updatedContacts, contactList);
    }
  });
}

export function handleFilter(filterInput, contacts, contactList) {
  filterInput.addEventListener('input', function () {
    const filterValue = filterInput.value.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue) || contact.phone.includes(filterValue)
    );
    updateContactList(filteredContacts, contactList);
  });
}

export function handleClearFilter(clearFilterBtn, filterInput, contacts, contactList) {
  clearFilterBtn.addEventListener('click', function () {
    filterInput.value = '';
    updateContactList(contacts, contactList);
  });
}
