import {useSelector} from 'react-redux';

const useFavoriteCheck = id => {
  const favoriteItems = useSelector(state => state.favorites);
  return favoriteItems.find(favoriteItem => favoriteItem.id === id);
};

export default useFavoriteCheck;
