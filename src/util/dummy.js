import amountConverter from "./amountConverter";

const DUMMY_DATA = [
  {
    year: 1,
    totalSavings: amountConverter(11900),
    yearlyInterest: amountConverter(700),
    totalInterest: amountConverter(700),
    investedCapital: amountConverter(11200)
  },
  {
    year: 2,
    totalSavings: amountConverter(13933),
    yearlyInterest: amountConverter(833),
    totalInterest: amountConverter(1533),
    investedCapital: amountConverter(12400)
  },
  {
    year: 3,
    totalSavings: amountConverter(16108.31),
    yearlyInterest: amountConverter(975.31),
    totalInterest: amountConverter(2508.31),
    investedCapital: amountConverter(13600)
  }
];
