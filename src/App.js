import CategoryContainer from './components/category-container/category-container.component'; 

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Seasonal',
      imageUrl: 'https://img.freepik.com/free-photo/black-woman-trendy-grey-leather-jacket-posing-beige-background-studio-winter-autumn-fashion-look_273443-141.jpg?w=1380&t=st=1666142984~exp=1666143584~hmac=389a1772813e5e1e55d754b89b9047858cb7cb814dae3ee8ce3c198464816f32',
    },
    {
      id: 2,
      title: 'Shirts & Blouses',
      imageUrl: 'https://images.unsplash.com/photo-1612731486606-2614b4d74921?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80',
    },
    {
      id: 3,
      title: 'Shoes',
      imageUrl: 'https://img.freepik.com/free-photo/close-up-legs-boots-stylish-woman-jacket-walking-against-wall-street_285396-8086.jpg?w=1380&t=st=1666142075~exp=1666142675~hmac=d66ebfa759af64957152ccdaca72136b8a4ab0796621aecc12e7e56cc694b630',
    },
    {
      id: 4,
      title: 'Blazers',
      imageUrl: 'https://images.unsplash.com/photo-1625518962804-2f9bcd1c9c4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60',
    },
    {
      id: 5,
      title: 'Accessories',
      imageUrl: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2263&q=80',
    }
  ];
  return (
    <CategoryContainer categories={categories} />
  );
}

export default App;
