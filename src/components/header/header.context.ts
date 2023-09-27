import { configureReducer, Reducer } from "@/utils/configureReducer";
import { useContext, useReducer } from "react";

export const initialState = {
  expand: false,
  name: "hello",
};
type test = typeof initialState[keyof typeof initialState]
export const headerReducer = {
  setExpand: (state: typeof initialState, action: { payload: boolean }) => {
    // state.expand = action.payload;
    return { ...state, expand: action?.payload as boolean };
  },
  changeName: (state: typeof initialState) => {
    return { ...state, name: "Ryland" };
  },
} satisfies Record<string, Reducer<typeof initialState>>;
const { reducer, actions, context } = configureReducer(
  initialState,
  headerReducer
);
export const useDispatch = () => {
  return useReducer(reducer, initialState);
};
export const useHeaderContext = () => {
  return useContext(context);
}

export const { Provider } = context;
export const { setExpand, changeName } = actions;
