const Validator = {
  validateEmail: (email: string) => {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  },

  validatePhoneNumber: (phoneNumber: string) => {
    return phoneNumber.replace(/\s+/g, '').length > 14;
  },
  normalizedNumber: (phoneNumber: string) => {
    return phoneNumber.replace(/\s+/g, '').replace(/^(?:\+|855|0)+/, '');
  },
  numberWithCountryCode: (phoneNumber: string) => {
    return `855${Validator.normalizedNumber(phoneNumber)}`;
  },
};

export default Validator;
