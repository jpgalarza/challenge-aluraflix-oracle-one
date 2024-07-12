import './input.css';

export const Input = ({ type, label, name, placeholder }) => {
  return (
    <label htmlFor={name} className="form-label">{label}
      <input 
        type={type} 
        className="form-input input-error" 
        id={name} 
        name={name} 
        placeholder={placeholder}
      />
      <p className="error-message"></p>
    </label>
  )
}
