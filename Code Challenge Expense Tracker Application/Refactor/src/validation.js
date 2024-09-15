export function validateContact(name, phone, terms) {
    if (!/^[A-Za-z\s]+$/.test(name)) {
      return 'Name should contain only letters.';
    }
    if (!/^[0-9]+$/.test(phone)) {
      return 'Phone should contain only numbers.';
    }
    if (!terms) {
      return 'You must accept the terms.';
    }
    return null; // No errors
  }
  