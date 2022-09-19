import React, { useState, useContext } from "react";
import { recuperateAccount } from "../../services/auth";
import { FormRecuperateAccount } from "../../interface/formAuth";

import { ToastContext } from "../../context/toast"; //toast
import { useNavigate } from "react-router";

export const UseForm = (
  initialForm: FormRecuperateAccount,
  validateForm: (form: any) => {}
) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({} as FormRecuperateAccount | any);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);

  const { handleToast } = useContext(ToastContext); //toast
  const navigate = useNavigate();

  const handleSend = async (form: FormRecuperateAccount) => {
    try {
      setLoading(true);
      const res = await recuperateAccount(form);
   //   const tkn = (await res?.json()).token;
      //start toast
      var message = await res?.json();
      if (res?.status === 200) {
        handleToast("El proceso fue exitoso");
      //  codeToken(tkn);
      } else {
        handleToast(message.message);
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
