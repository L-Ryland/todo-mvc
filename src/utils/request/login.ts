import server from "@utils/server";

interface LoginRequest {
  username: string;
  password: string;
}
export const login = (params: LoginRequest) => {
  return server.post<LoginRequest>("/login", params);
}