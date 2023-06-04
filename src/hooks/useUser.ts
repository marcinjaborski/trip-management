import { useEffect, useState } from "react";
import pb from "@src/pb";
import { useNavigate } from "react-router-dom";

export const useUser = () => {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLogged(pb.authStore.isValid);
  }, [pb.authStore.isValid]);

  const logout = () => {
    pb.authStore.clear();
    setIsLogged(false);
    navigate("/");
  };

  return { isLogged, logout };
};
