import { renderHook, act, waitFor } from "@testing-library/react";
import { ReactNode, useContext, useReducer } from "react";
import { describe, expect, test } from "vitest";
import { configureReducer } from "./configureReducer";

describe("Configure reducer", () => {
  const initialState = {
    expand: false,
  };
  const _reducer = {
    setExpand: (state: typeof initialState, action: { payload: boolean }) => {
      return { ...state, expand: action.payload };
    },
  };
  test("generate reducers", () => {
    const { actions, reducer } = configureReducer(initialState, _reducer);
    expect(actions.setExpand).toBeDefined();
    expect(actions.setExpand(true)).toEqual({
      type: "setExpand",
      payload: true,
    });
  });
  test("wrap reducer to provider", async () => {
    const { actions, reducer, context } = configureReducer(
      initialState,
      _reducer
    );
    const wrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
      const [state, dispatch] = useReducer(reducer, initialState);
      return (
        <context.Provider value={{ state, dispatch }}>
          {children}
        </context.Provider>
      );
    };
    const { result } = renderHook(() => useReducer(reducer, initialState), {
      wrapper,
    });
      console.log("result: ", result);
      act(() => {
      const { setExpand } = actions;
      const [state, dispatch] = result.current;
      dispatch(setExpand(true));
      })
      
      await waitFor(() => {
        const [state, dispatch] = result.current;
        expect(state.expand).toBe(true);
      })
  });
});
