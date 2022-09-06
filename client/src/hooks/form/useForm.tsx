import React, { useState,useContext } from "react";
import { signIn } from "../../services/auth";
import { FormLogin } from "./../../interface/formLogin";

import {ToastContext} from '../../context/toast' //toast


export const UseForm = (
  initialForm: FormLogin,
  validateForm: (form: any) => {}
) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({} as FormLogin | any);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);


  const { handleToast } = useContext(ToastContext); //toast



  const handleSend = async (form: FormLogin) => {
    try {
      setLoading(true);
      const res = await signIn(form);
      //start toast
      if(res?.status === 200){
        handleToast('El proceso fue exitoso')
      } else{
        handleToast('Ha ocurrido un error')
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
