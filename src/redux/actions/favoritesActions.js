export const addToFavorites = item => {
  return {type: 'add', payload: item};
};

export const removeFromFavorites = item => {
  return {type: 'remove', payload: item};
};

export const clearFavorites = () => {
  return {type: 'clear'};
};
