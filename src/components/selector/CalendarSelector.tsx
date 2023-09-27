import { card } from "./calendarSelector.module.css";
import MonthView from "./MonthView";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useCallback, useMemo, useReducer, useState } from "react";
import { useBreakPoint } from "@/hooks/useBreakPoint";
import { cx } from "@emotion/css";
import { isNumber } from "lodash";

const calendarState = {
  monthOffset: 0,
};
const calendarReducer = (
  state: typeof calendarState,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;
  switch (type) {
    case "skipToNextMonth":
      if (isNumber(payload)) {
        return { state, monthOffset: state.monthOffset + payload };
      }
      break;
    case "skipToPrevMonth":
      if (isNumber(payload)) {
        return { state, monthOffset: state.monthOffset - payload };
      }
      break;
    default:
      break;
  }
  return state;
};
const CalenderSelector = () => {
  const [isSplitView, setIsSplitView] = useState(true);
  const breakpoint = useBreakPoint();
  if (breakpoint === "tablet") {
    setIsSplitView(false);
  }
  const [state, dispatch] = useReducer(calendarReducer, calendarState);
  const { monthOffset } = state;
  const payload = useMemo(() => (isSplitView ? 2 : 1), [isSplitView]);
  return (
    <div className={card}>
      <button
        className="absolute top-8"
        disabled={monthOffset === 0}
        onClick={() => dispatch({ type: "skipToPrevMonth", payload })}
      >
        <ChevronLeftIcon />
      </button>
      {/* <div>{monthOffset}</div> */}
      <button
        className="absolute top-8 right-4"
        onClick={() => dispatch({ type: "skipToNextMonth", payload })}
      >
        <ChevronRightIcon />
      </button>
      <div className={cx("grid", { ["grid-cols-2 gap-x-12"]: isSplitView })}>
        <MonthView monthOffset={monthOffset} />
        {isSplitView && <MonthView monthOffset={monthOffset + 1} />}
      </div>
    </div>
  );
};

export default CalenderSelector;
