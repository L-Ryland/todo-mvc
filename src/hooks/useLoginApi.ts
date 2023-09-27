import { useMutation } from "@tanstack/react-query";
import { login } from "@request/login";

export const useLogin = () => {
  return useMutation(login);
}