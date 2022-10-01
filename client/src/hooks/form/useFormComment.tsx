import React, { useState, useContext, useEffect } from "react";
import { postComment } from "../../services/comment";
import { FormComment } from "../../interface/formComment";

import { ToastContext } from "../../context/toast"; //toast
import { useNavigate } from "react-router";

export const UseForm = (
  initialForm: FormComment,
  validateForm: (form: any) => {}
) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({} as FormComment | any);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);

  const { handleToast } = useContext(ToastContext); //toast
  const navigate = useNavigate();

  const handleSend = async (form: FormComment) => {
      try {
      setLoading(true);
      const res = await postComment(form);
      if (res?.status === 200) {
        handleToast("El proceso fue exitoso");
      } else {
        handleToast("Ha ocurrido un error");
      }
      //end toast
      setLoading(false);
      setResponse(true);
      setTimeout(() => setResponse(false), 3000);
      setForm(initialForm); //if want cleam the inputs
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

  const [effects, setEffects] = useState(false);
  useEffect(() => {
    if (effects) {
      if (Object.keys(errors).length === 0) {
        handleSend(form);
      }
    }
    setEffects(true);
  }, [errors]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(validateForm(form));
  };
  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleSubmit,
  };
};
