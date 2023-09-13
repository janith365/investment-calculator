import { useState } from "react";

export default function UserInput({ calculateHandler, setShowResult }) {
  const defaultInput = {
    currentSavings: 10000,
    yearlyContribution: 1200,
    expectedReturn: 7,
    duration: 10
  };
  const [input, setInput] = useState(defaultInput);

  const resetHandler = () => {
    setInput(() => defaultInput);
    setShowResult(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    calculateHandler(input);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            name="currentSavings"
            value={input.currentSavings}
            onChange={changeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            name="yearlyContribution"
            value={input.yearlyContribution}
            onChange={changeHandler}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Interest (%, per year)</label>
          <input
            type="number"
            id="expected-return"
            name="expectedReturn"
            value={input.expectedReturn}
            onChange={changeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" name="duration" value={input.duration} onChange={changeHandler} />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}
