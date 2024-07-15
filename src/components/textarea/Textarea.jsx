import { useContext } from 'react';
import './textarea.css';
import { VideoContext } from '../../context/VideoContext';

export const Textarea = ({ name, label, placeholder, value, handleInputChange, validate, error }) => {
  const { videoEdit } = useContext(VideoContext);

  return (
    <label htmlFor={name} className="form-label">{label}
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        className={`form-input form-textarea ${(error !== '') && 'input-error'} ${videoEdit && 'input-edit'}`} 
        onChange={e=> handleInputChange(e.target.name, e.target.value)}
        onBlur={e => validate(e.target)}
        onInvalid={e => { e.preventDefault(); validate(e.target) }}
        minLength={10}
        maxLength={500}
        required
      ></textarea>
      <p className="error-message">{error !== ''? error : ''}</p>
    </label>
  )
}
