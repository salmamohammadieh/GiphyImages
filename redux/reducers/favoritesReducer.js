const initialState = [];

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'remove': {
      return state.filter(favoriteItem => favoriteItem.id !== action.payload);
    }
    case 'clear':
      return (state = []);
    default:
      return state;
  }
};

export default favoritesReducer;
