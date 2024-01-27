import {useDispatch} from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
} from '../redux/actions/favoritesActions';

const useFavoriteActions = () => {
  const dispatch = useDispatch();
  const handleToggleFavorite = (isSaved, id, title, imageUrl) => {
    if (isSaved) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites({id, title, imageUrl}));
    }
  };

  return {handleToggleFavorite};
};

export default useFavoriteActions;
