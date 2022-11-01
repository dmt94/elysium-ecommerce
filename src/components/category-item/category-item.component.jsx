import './category-item.styles.scss';
import NewIndicator from './new-indicator.png';

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
      <div className="category-container">
        <div 
          className="background-image" 
          style={{
            backgroundImage: `url(${imageUrl})`}} >
        </div>
        <div className="category-body-container">
          <h2>{title}</h2>
          <hr className='title-line' />
          <p className='view-link'>View {title}</p>
          {
            title === 'Seasonal' ? 
            <div className='new-item'>
                <img src={NewIndicator} 
              alt="New item indicator" className='new-icon'/> 
            </div> : null
          }
        </div>
      </div>
  );
}

export default CategoryItem;