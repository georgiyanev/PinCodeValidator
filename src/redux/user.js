export const UPDATE_USERPIN = 'UPDATE_USERPIN';
export const DELETE_USERPIN = 'DELETE_USERPIN';

export const updateUsername = userpin => ({
  type: UPDATE_USERPIN,
  userpin,
});

export const deletePin = userpin => ({
  type: DELETE_USERPIN,
  userpin,
});

export const initialState = {
  userpin: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERPIN:
      return {
        ...state,
        userpin: action.userpin,
      }
    case DELETE_USERPIN:
      return {
        ...state,
        userpin: '',
      };
    default:
      return state;
  }
};
