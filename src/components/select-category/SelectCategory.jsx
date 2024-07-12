import './select-category.css'

export const SelectCategory = ({ label, name, defaultText}) => {
  return (
    <label htmlFor={name} className="form-label">{label}
      <select name={name} id={name} className="form-input">
        <option value="" hidden >{defaultText}</option>
        <option value="category1">Front End</option>
        <option value="category2">Back End</option>
        <option value="category3">Innovación y Gestión</option>
      </select>
    </label>
  )
}
