const initialState = {
  isLoggedIn: false,
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'login':
      return {isLoggedIn: true};
    case 'logout':
      return {isLoggedIn: true};
    default:
      return state;
  }
};

export default authenticationReducer;
