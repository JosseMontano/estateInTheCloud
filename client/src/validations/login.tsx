import { FormLogin } from "../interface/formAuth";

export const initialForm = {
    email: "",
    password: "",
  };
  
export const validationsForm = (form: FormLogin) => {
    let errors = {} as FormLogin;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    if (!form.email.trim()) {
      errors.email = "El campo 'Email' es requerido";
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = "El campo 'Email' es incorrecto";
    }
    if (!form.password.trim()) {
      errors.password = "El campo 'contraseña a tratar' es requerido";
    }
    return errors;
  };