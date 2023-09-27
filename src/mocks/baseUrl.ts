export const home = (param: string) => {
  const baseURL = import.meta.env.VITE_API_URL;
  console.log("baseURL: ", baseURL);
  return new URL(param, import.meta.env.VITE_API_URL).toString();
};
