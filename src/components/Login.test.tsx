import { render, screen } from "@testing-library/react";
import { Login } from "./Login";
import userEvent from "@testing-library/user-event";
import {Wrapper} from "@hooks/index"

describe("test Login", () => {
  test("test login form", async () => {
    // given
    const { container } = render(<Wrapper><Login/></Wrapper>);
    // when
    await userEvent.type(screen.getByPlaceholderText(/Please input username/i), "admin");
    await userEvent.type(screen.getByPlaceholderText(/Please input password/i), "123456");
    const submitBtn = container.querySelector('button[type="submit"]');
    // then
    if (submitBtn) {
      await userEvent.click(submitBtn);
      expect(screen.getByText("admin")).toBeInTheDocument();
      expect(screen.getByText("123456")).toBeInTheDocument();
    }
  })
})