import { createContext, useState } from "react";
import data from '../data/data.json';

export const CategoryContext = createContext();

const CategoryContextProvider = ({ children }) => {
  const [categories, setCategories] = useState(data.categories);

  return (
    <CategoryContext.Provider 
      value={{categories}}
    >
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryContextProvider;