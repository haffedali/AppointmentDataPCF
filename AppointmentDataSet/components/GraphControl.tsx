import * as React from "react";
import { GraphControlInterface, Month } from "../interfaces";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts";
import { MonthOptionSet } from "./MonthOptionSet";
import { dataWithTests, data } from "../fakeApi";

export const GraphControl: React.FC<GraphControlInterface> = () => {
  const [month, setMonth] = React.useState<Month>("A");

  const [newMonthData, setNewMonthData] = React.useState<any>(dataWithTests);

  function handleSetMonth(monthChange: Month) {
    setMonth(monthChange);
    if (monthChange === "A") {
      // console.log("Jan");
      // setMonthData(dataSetJan);
      setNewMonthData(dataWithTests);
    } else if (monthChange === "B") {
      // console.log("Feb");
      // setMonthData(dataSetFeb);
      setNewMonthData(data);
    }
  }

  // for (let monthCheck in props.LineGraphProps.datasets) {
  //   if (props.LineGraphProps.datasets[monthCheck].key === "A") {
  //     // setMonthData(props.LineGraphProps.datasets[monthCheck]);
  //     props.LineGraphProps = dataSetJan
  //   }
  // }

  return (
    <div className="graph-control-container">
      <div className="option-set-container">
        <div className="month-option-set">
          <MonthOptionSet handleSetMonth={handleSetMonth} month={month} />
        </div>
        <div className="test-option-set">
        </div>
      </div>
        <div className="graph-container">

          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={newMonthData}>
              <Line type="monotone" dataKey="total" stroke="red" />
              <Line type="monotone" dataKey="corona" stroke="blue" />
              <Line type="monotone" dataKey="blood" stroke="green" />
              <Line type="monotone" dataKey="hemoglobin" stroke="purple" />
              <XAxis dataKey="name" />
              <YAxis />
            </LineChart>

          </ResponsiveContainer>
        </div>
    </div>
  );
};
