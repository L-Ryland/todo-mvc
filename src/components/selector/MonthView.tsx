import { useEffect, useMemo, useState, memo } from "react";
import { monthView, disabled } from "./calendarSelector.module.css";
import dayjs, { Dayjs } from "dayjs";
import { cx } from "@emotion/css";

interface MonthViewProps {
  value?: Dayjs;
  monthOffset?: number;
}
const MonthView: React.FC<MonthViewProps> = memo(({ value, monthOffset }) => {
  const currentDate = useMemo(() => value || dayjs(), []);
  const _currentDate = useMemo(
    () =>
      monthOffset
        ? monthOffset > 0
          ? currentDate.add(monthOffset, "month")
          : currentDate.subtract(monthOffset, "month")
        : currentDate,
    [currentDate, monthOffset]
  );
  const dateArr = useMemo(() => {
    console.log('dateArr: ');
    const firstDay = _currentDate.date(1);

    let i = 0,
      j = 0;
    const dateArr = new Array<Array<number>>();
    let daysArr = new Array<number>(7);
    while (i < firstDay.get("day")) {
      daysArr.push(0);
      i++;
      j++;
    }
    i = 0;
    while (i < firstDay.daysInMonth()) {
      daysArr.push(i + 1);
      ++i;
      ++j;
      if (j === 7) {
        dateArr.push(daysArr);
        daysArr = new Array<number>(7);
        j = 0;
      }
    }
    if (j < 7) {
      dateArr.push(daysArr);
    }
    console.log("this month: ", dayjs().format("MMMM YYYY"));
    return dateArr;
  }, [_currentDate]);
  const monthTitle = useMemo(
    () => _currentDate.format("MMMM YYYY"),
    [_currentDate]
  );
  return (
    <div className={monthView}>
      <p className="text-center py-4">{monthTitle}</p>
      <table className="table-fixed">
        <thead>
          <tr>
            <th>Su</th>
            <th>Mo</th>
            <th>Tu</th>
            <th>We</th>
            <th>Th</th>
            <th>Fr</th>
            <th>Sa</th>
          </tr>
        </thead>
        <tbody>
          {dateArr.map((week, i) => (
            <tr key={i}>
              {week.map((day, j) => (
                <td key={j}>
                  {day ? (
                    <div
                      className={cx({
                        [disabled]: !monthOffset && day < dayjs().date(),
                      })}
                    >
                      {day}
                    </div>
                  ) : (
                    " "
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

MonthView.displayName = "MonthView";
export default MonthView;
