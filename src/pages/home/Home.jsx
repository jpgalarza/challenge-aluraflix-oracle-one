import { useContext } from "react";
import { Category } from "../../components/category/Category"
import { CategoryContext } from "../../context/CategoryContext";
import { Banner } from "../../components/banner/Banner";

export const Home = () => {
  const { categories } = useContext(CategoryContext);

  return (
    <main>
    <Banner/>
    {categories.map(category => <Category key={category.id} {...category}/>)}
  </main> 
  )
}

