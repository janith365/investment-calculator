export default function NumberInput({ id, label, value }) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input type="number" id={id} value={value} />
    </p>
  );
}
