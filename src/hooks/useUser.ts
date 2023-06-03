import { useEffect, useState } from "react";
import pb from "@src/pb";

export const useUser = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setIsLogged(pb.authStore.isValid);
  }, [pb.authStore.isValid]);

  const logout = () => {
    pb.authStore.clear();
    setIsLogged(false);
  };

  return { isLogged, logout };
};
