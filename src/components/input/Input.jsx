import './input.css';

export const Input = ({ type, name, label, placeholder, value, handleInputChange, validate, error }) => {
  return (
    <label htmlFor={name} className="form-label">{label}
      <input 
        type={type}
        id={name} 
        name={name} 
        placeholder={placeholder}
        value={value} 
        className={`form-input ${(error !== '') && 'input-error'}`} 
        onChange={ e => handleInputChange(e.target.name, e.target.value) }
        onBlur={e => validate(e.target)}
        required
      />
      <p className="error-message">{error !== ''? error : ''}</p>
    </label>
  )
}
