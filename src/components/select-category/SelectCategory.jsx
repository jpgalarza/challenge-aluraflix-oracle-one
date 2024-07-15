import { useContext } from 'react'
import './select-category.css'
import { CategoryContext } from '../../context/CategoryContext'
import { VideoContext } from '../../context/VideoContext';

export const SelectCategory = ({ name, label, defaultText, value, handleInputChange, validate, error}) => {
  const { categories } = useContext(CategoryContext);
  const { videoEdit } = useContext(VideoContext)
  
  return (
    <label htmlFor={name} className="form-label">{label}
      <select 
        name={name} 
        id={name} 
        value={value}
        className={`form-input ${(error !== '') && 'input-error'} ${videoEdit && 'input-edit'}`} 
        onChange={e => handleInputChange(e.target.name, e.target.value) }
        onBlur={e => validate(e.target)}
        onInvalid={e => { e.preventDefault(); validate(e.target) }}
        required
      >
        <option value="" hidden >{defaultText}</option>
        {categories.map(categ => 
          <option key={categ.id} value={categ.id} className={`${videoEdit && 'opt-edit'}`}>
            {categ.name}
          </option>)
        }
      </select>
      <p className="error-message">{error !== ''? error : ''}</p>
    </label>
  )
}
