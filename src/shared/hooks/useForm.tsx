import React, { useState } from "react";
import { toast } from "react-hot-toast";

type UseFormType = {
  onSubmit: () => void;
  messages?: {
    loading?: string;
    success?: string;
    error?: string;
  };
};

export default function useForm<FormStructure>({
  onSubmit,
  messages,
}: UseFormType) {
  const [form, setForm] = useState({} as FormStructure);

  const handleSetForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const cleanFormValues = () => {
    setForm({} as FormStructure);
  };

  const handleSubmitForm = async (e: React.FormEvent) => {
    try {
      toast.loading(messages?.loading ?? "Cargando", { id: "form" });
      e.preventDefault();
      onSubmit();
      toast.success(messages?.success ?? "¡Enviado!", { id: "form" });
    } catch (error: any) {
      if (error.response.data.message) {
        toast.error(error.response.data.message, { id: "form" });
      } else {
        toast.error(
          messages?.error ??
            "¡Ouch! Ocurrió un error inesperado, intenta nuevamente",
          { id: "form" }
        );
      }
    }
  };

  return { values: form, handleSetForm, handleSubmitForm, cleanFormValues };
}
