import React, { useContext } from "react";
import TestCasesContext from "../utils/TestCasesContext";
import TestCase from "./TestCase";

const TestCases = () => {
  const { testCases, setTestCases } = useContext(TestCasesContext);

  console.log(testCases);

  const columns = [
    ["Test Case Name", ""],
    ["Estimate Time", "(In Minutes)"],
    ["Module", ""],
    ["Priority", ""],
    ["Status", ""],
  ];

  return (
    <table className="testcases-table">
      <thead className="testcases-header testcases-row">
        <tr className="">
          {columns.map((item, index) => {
            return (
              <th key={index} className="testcases-header-column">
                <h3>{item[0]}</h3>
                {item[1] !== "" && <h5>{item[1]}</h5>}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {testCases.map((item) => {
          console.log(item);
          return (
            <TestCase
              key={item.id}
              id={item.id}
              name={item.name}
              time={item.time}
              module={item.module}
              priority={item.priority}
              status={item.status}
              timeduration={item.timeduration}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default TestCases;
