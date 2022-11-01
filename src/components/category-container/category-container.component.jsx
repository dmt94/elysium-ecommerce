import CategoryItem from '../category-item/category-item.component';
import './categories.styles.scss';

const CategoryContainer = ({ categories }) => {
  return (
    <div className='main-category-div'>
      <div className="categories-container">
        {categories.map((category) => (
           <CategoryItem key={category.id} category={category} />
        ))
      }
      </div>
    </div>
  );
}

export default CategoryContainer;