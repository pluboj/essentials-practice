export default function UserInput({ type, label, inputId, onInputChange }) {
  return (
    <label htmlFor={inputId}>
      {label}
      <input type={type} id={inputId} name={inputId} onChange={(event) => onInputChange(event)}></input>
    </label>
  );
}
