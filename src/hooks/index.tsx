import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@utils/queryClient";
import { ReactNode } from "react";

export const Wrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
