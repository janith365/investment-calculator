export default function Row({ data }) {
  return (
    <tr>
      <td>{data.year}</td>
      <td>{data.totalSavings}</td>
      <td>{data.yearlyInterest}</td>
      <td>{data.totalInterest}</td>
      <td>{data.investedCapital}</td>
    </tr>
  );
}
