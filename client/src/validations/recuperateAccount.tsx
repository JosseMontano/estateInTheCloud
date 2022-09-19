import { FormRecuperateAccount } from "../interface/formAuth";

export const initialForm = {
    email: "",
    password: "",
    secrect_password:"",
  };
  
export const validationsForm = (form: FormRecuperateAccount) => {
    let errors = {} as FormRecuperateAccount;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    if (!form.email.trim()) {
      errors.email = "El campo 'Email' es requerido";
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = "El campo 'Email' es incorrecto";
    }
    if (!form.password.trim()) {
      errors.password = "El campo 'contraseña a tratar' es requerido";
    }
    if (!form.secrect_password.trim()) {
        errors.secrect_password = "El campo es requerido";
      }
    return errors;
  };