import { rest } from "msw";
import { home } from "./baseUrl";

const login = () => {
  console.log("baseURL", home("/login"));
  return rest.post(home("/login"), (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem("is-authenticated", "true");
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        success: true,
        username: "testUser",
      })
    );
  });
};

const getUser = () => {
  return rest.get(home("/user"), (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem("is-authenticated");
    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    );
  });
};

export default [login(), getUser()]
