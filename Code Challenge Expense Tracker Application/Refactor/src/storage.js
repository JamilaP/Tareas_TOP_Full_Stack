export function saveContacts(contacts) {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }
  
  export function getContacts() {
    return JSON.parse(localStorage.getItem('contacts')) || [];
  }
  