import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import TestCasesContext from "./utils/TestCasesContext";

function App() {
  const [testCases, setTestCases] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/testcases")
      .then((response) => response.json())
      .then((data) => {
        const testCasesArray = data.map((item) => ({
          id: item[0],
          name: item[1],
          time: item[2],
          module: item[3],
          priority: item[4],
          status: item[5],
          timeduration: item[6],
        }));
        setTestCases(testCasesArray);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <TestCasesContext.Provider value={{ testCases, setTestCases }}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </TestCasesContext.Provider>
  );
}

export default App;
