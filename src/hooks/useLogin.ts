import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import pb from "@src/pb";
import { useNavigate } from "react-router-dom";
import { FeedbackContext } from "@src/FeedbackContext";

type LoginFormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const useLogin = () => {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const { t } = useTranslation("translation", { keyPrefix: "login" });
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginFormData>();
  const navigate = useNavigate();
  const { setFeedback } = useContext(FeedbackContext)!;

  const login = async (data: LoginFormData) => {
    try {
      await pb.collection("users").authWithPassword(data.email, data.password);
      navigate("/");
    } catch (err) {
      setFeedback({
        message: t("loginError"),
        severity: "error",
      });
    }
  };

  const loginUser = handleSubmit(async (data) => {
    await login(data);
  });

  const registerUser = handleSubmit(async (data) => {
    try {
      await pb.collection("users").create({
        email: data.email,
        password: data.password,
        passwordConfirm: data.confirmPassword,
      });
      await login(data);
    } catch (err) {
      setFeedback({
        message: t("registerError"),
        severity: "error",
      });
    }
  });

  return { t, activeTab, setActiveTab, register, errors, watch, loginUser, registerUser };
};
