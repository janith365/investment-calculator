import UserInput from "./components/Calculator/UserInput";
import Header from "./components/Header";
import ResultTable from "./components/CalculationTable/ResultTable";
import { useState } from "react";
import amountConverter from "./util/amountConverter";

function App() {
  const [input, setInput] = useState({});
  const [showResult, setShowResult] = useState(false);
  const savingsData = [];

  const calculateHandler = (userInput) => {
    setInput(() => userInput);
    setShowResult(true);
  };

  if (showResult) {
    let currentSavings = Number(input.currentSavings);
    const yearlyContribution = Number(input.yearlyContribution);
    const expectedReturn = Number(input.expectedReturn) / 100;
    const duration = Number(input.duration);
    let totalInterest = 0;
    for (let i = 1; i <= duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      totalInterest += yearlyInterest;
      currentSavings += yearlyInterest + yearlyContribution;
      const yearlySavingsData = {
        year: i,
        totalSavings: amountConverter(currentSavings),
        yearlyInterest: amountConverter(yearlyInterest),
        totalInterest: amountConverter(totalInterest),
        investedCapital: amountConverter(currentSavings - totalInterest)
      };
      savingsData.push(yearlySavingsData);
    }
  }

  return (
    <div>
      <Header />
      <UserInput calculateHandler={calculateHandler} setShowResult={setShowResult} />
      {!showResult && <p style={{ textAlign: "center" }}>No investment calculated yet.</p>}
      {showResult && <ResultTable savingsData={savingsData} />}
    </div>
  );
}

export default App;
