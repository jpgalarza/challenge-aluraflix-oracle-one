import './textarea.css';

export const Textarea = ({ label, name, placeholder }) => {
  return (
    <label htmlFor={name} className="form-label">{label}
      <textarea
        className="form-input form-textarea input-error"
        id={name}
        name={name}
        placeholder={placeholder}
        minLength={10}
        maxLength={300}
      ></textarea>
      <p className="error-message">Este es otro mensaje de error</p>
    </label>
  )
}
