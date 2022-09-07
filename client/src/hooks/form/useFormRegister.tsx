import React, { useState, useContext } from "react";
import { signUp } from "../../services/auth";
import { FormRegister } from "../../interface/formAuth";

import { ToastContext } from "../../context/toast"; //toast

export const UseForm = (
  initialForm: FormRegister,
  validateForm: (form: any) => {}
) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({} as FormRegister | any);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);

  const { handleToast } = useContext(ToastContext); //toast

  const handleSend = async (form: FormRegister) => {
    try {
      setLoading(true);
      const res = await signUp(form);
      //start toast
      const resJson = await res?.json();
      const auth = resJson.auth;
      if (auth) {
        handleToast("El proceso fue exitoso");
      } else {
        handleToast(resJson.msg.detail);
      }
      //end toast
      setLoading(false);
      setResponse(true);
      setTimeout(() => setResponse(false), 3000);
      // setForm(initialForm); //if want cleam the inputs
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleBlur = (
    e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    handleChange(e);
    setErrors(validateForm(form));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(validateForm(form));
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      handleSend(form);
    } else {
      return;
    }
  };
  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
