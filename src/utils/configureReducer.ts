import { isNil, keysIn } from "lodash";
import { createContext, Reducer as ReactReducer } from "react";
export type Reducer<State, Key extends keyof State = keyof State> = (
  state: State,
  action: { payload: any }
) => State;
type PreparePayload<
  Reducers extends Record<any, (state: State, action: {payload: State[keyof State]}) => State>,
  State = unknown
> = {
  [Property in keyof Reducers]: Parameters<Reducers[Property]> extends [
    unknown,
    { payload: infer Param }
  ]
    ? (payload: Param) => { type: Property; payload: Param }
    : () => { type: Property };
};
export const configureReducer = <
  State extends Record<string, unknown> = any,
  _Reducer extends Record<string, Reducer<State>> = any
>(
  state: State,
  reducer: _Reducer
) => {
  const preparePayloads: PreparePayload<_Reducer, State> = {} as any;
  keysIn(reducer).forEach((key) => {
    const type = key as keyof _Reducer;
    preparePayloads[type] = ((payload: State[keyof State]) => {
      return { type, payload };
    }) as any;
  });
  const _reducer = (
    state: State,
    { type, payload }: {type: string, payload: unknown} 
  ) => {
    // console.log("state: ", state, reducer[type]);
    if (type in reducer) {
      return reducer[type](state, { payload });
    } else throw Error("Unknown action.");
  };
  const context = createContext<{
    state: State;
    dispatch: (...params: any[]) => void;
  }>({ state, dispatch: () => {} });
  return {
    reducer: _reducer as unknown as ReactReducer<State, any>,
    actions: preparePayloads,
    context,
  };
};
