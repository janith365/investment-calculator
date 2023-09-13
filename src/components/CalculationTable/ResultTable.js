import Columns from "./Columns";
import Row from "./Row";

export default function ResultTable({ savingsData }) {
  console.log(savingsData);
  return (
    <table className="result">
      <Columns />
      <tbody>
        {savingsData.map((data) => (
          <Row key={data.year} data={data} />
        ))}
      </tbody>
    </table>
  );
}
