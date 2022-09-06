import React, { useState } from "react";
import { signIn } from "../../services/auth";
import { FormLogin } from "./../../interface/formLogin";

export const UseForm = (
  initialForm: FormLogin,
  validateForm: (form: any) => {}
) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({} as FormLogin | any);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);

  const handleSend = async (form: FormLogin) => {
    try {
      const { email, password } = form;
      const response = await signIn(email, password);
      setLoading(false);
      setResponse(true);
      setForm(initialForm);
      setTimeout(() => setResponse(false), 5000);
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
