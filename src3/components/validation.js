export default function validate(inputs) {
  let regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  let errors = {};
  if (!regexEmail.test(inputs.username)) {
    errors.username = "Debe ser un correo electrónico";
  }
  if (inputs.password.length > 10 || inputs.password.length < 6) {
    errors.password = "password entre 6 y 10 caracteres";
  }
  return errors;
}
