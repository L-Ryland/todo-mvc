import { renderHook, waitFor } from "@testing-library/react";
import { useLogin } from "./useLoginApi";
import { describe, it, expect} from "vitest"
import { Wrapper } from ".";

describe("test loginApi hooks", () => {
  it("test useLogin", async () => {
    const {result} = renderHook(useLogin, {wrapper: Wrapper});
    result.current.mutate({
      username: "admin",
      password: "123456"
    })
    await waitFor(() => {
      console.log('result: ', result.current);
      return expect(result.current.isSuccess).toBe(true);
    })
  })
})