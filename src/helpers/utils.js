
// check email format
const emailFormat = val => {
  const regex = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;

  return regex.test(val) || 'Invalid email';
};

// check field is empty
const hasWhiteSpacesOnly = val => {
  return val.replace(/\s/g, '').length || 'Field is empty';
};
export default {
  emailFormat,
  hasWhiteSpacesOnly
}
