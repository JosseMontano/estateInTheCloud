import { FormRegister } from "../interface/formAuth";

export const initialForm = {
    email: "",
    username: "",
    password: "",
    secrect_password:""
  };
  
 export const validationsForm = (form: FormRegister) => {
    let errors = {} as FormRegister;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    if (!form.email.trim()) {
      errors.email = "Este campo es requerido";
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = "Este campo es incorrecto";
    }
    if (!form.username.trim()) {
      errors.username = "Este campo es requerido";
    }
    if (!form.password.trim()) {
      errors.password = "Este campo es requerido";
    }
    if (!form.secrect_password.trim()) {
        errors.secrect_password = "Este campo es requerido";
      }
    return errors;
  };