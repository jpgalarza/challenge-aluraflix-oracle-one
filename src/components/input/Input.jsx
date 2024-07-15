import { useContext } from 'react';
import './input.css';
import { VideoContext } from '../../context/VideoContext';

export const Input = ({ type, name, label, placeholder, value, handleInputChange, validate, error }) => {
  const { videoEdit } = useContext(VideoContext)

  return (
    <label htmlFor={name} className="form-label">{label}
      <input 
        type={type}
        id={name} 
        name={name} 
        placeholder={placeholder}
        value={value} 
        className={`form-input ${(error !== '') && 'input-error'} ${videoEdit && 'input-edit'}`} 
        onChange={e => handleInputChange(e.target.name, e.target.value) }
        onBlur={e => validate(e.target)}
        onInvalid={e => { e.preventDefault(); validate(e.target) }}
        required
      />
      <p className="error-message">{error !== ''? error : ''}</p>
    </label>
  )
}
