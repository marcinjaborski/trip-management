import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import pb from "@src/pb";
import { useNavigate } from "react-router-dom";

type LoginFormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const useLogin = () => {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const { t } = useTranslation("translation", { keyPrefix: "login" });
  const { register, handleSubmit } = useForm<LoginFormData>();
  const navigate = useNavigate();

  const login = async (data: LoginFormData) => {
    await pb.collection("users").authWithPassword(data.email, data.password);
    navigate("/");
  };

  const loginUser = handleSubmit(async (data) => {
    await login(data);
  });

  const registerUser = handleSubmit(async (data) => {
    await pb.collection("users").create({
      email: data.email,
      password: data.password,
      passwordConfirm: data.confirmPassword,
    });
    await login(data);
  });

  return { t, activeTab, setActiveTab, register, loginUser, registerUser };
};
