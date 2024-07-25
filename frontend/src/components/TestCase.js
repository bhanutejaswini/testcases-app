import React from "react";

const TestCase = ({
  id,
  name,
  time,
  module,
  priority,
  status,
  timeduration,
}) => {
  return (
    <tr className="testcases-row">
      <td className="testcases-column">
        <p>{id}</p>
        <textarea rows="5" cols="30" name="tc-name" value={name}></textarea>
        <p className="updated">
          Last Updated: <span>{timeduration}</span>
        </p>
      </td>
      <td className="testcases-column">
        <p>{time}</p>
      </td>
      <td className="testcases-column">
        <p>{module}</p>
      </td>
      <td className="testcases-column">
        <p>{priority}</p>
      </td>
      <td className="testcases-column">
        <select>
          <option hidden disabled selected value>
            Select
          </option>
          <option value="pass">PASS</option>
          <option value="fail">FAIL</option>
        </select>
      </td>
    </tr>
  );
};

export default TestCase;
