import { useForm } from "react-hook-form";
import styles from "./login.module.css";
import { useState } from "react";
import { useLogin } from "@hooks/useLoginApi";
interface LoginForm {
  username: string;
  password: string;
}
export const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<LoginForm>();
  const [formState, setFormState] = useState<LoginForm>();
  const [result, setResult] = useState<unknown>();
  const {mutate} = useLogin();
  const onSubmit = (data: LoginForm) => {
    setFormState(data);
    mutate(data, {
      onSuccess: (result: unknown) => {
        setResult(result);
      }
    });
  };
  return (
    <div className={styles.loginForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Please input username"
          {...register("username", { required: true })}
        />
        <input
          type="password"
          placeholder="Please input password"
          {...register("password", { required: true })}
        />
        <button type="submit">Login</button>
        {formState && (
          <>
            <p>
              Username <span>{formState?.username}</span>
            </p>
            <p>
              Password <span>{formState?.password}</span>
            </p>
          </>
        )}
        <div data-testid="loginResult">{JSON.stringify(result)}</div>
      </form>
    </div>
  );
};
