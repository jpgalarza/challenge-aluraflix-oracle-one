import './button.css';

export const Button = ({ type, text, errors, data }) => {
  const missingData = data? Object.values(data).includes('') : null;
  const isError = errors? Object.values(errors).some(error => error !== '' ) : null;

  return (
    <button type={type} 
      className={`button ${(type === 'submit' && (missingData || isError)) && "btn-disabled"}`}
      disabled={type === 'submit' && (missingData || isError)? true : false }
    >
      {text}
    </button>
  )
}
