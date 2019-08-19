// Export Two Things - initialState, reducer fn

const initialState = {
  title: 'This is from Redux!!!!!!!!!',
  editing: false,
  members: [
    { name: 'Brandi', dragonStatus: true },
    { name: 'Josh', dragonStatus: false }
  ]
};

export const titleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_EDITING':
      return {
        ...state,
        editing: !state.editing
      };
    case 'UPDATE_TITLE':
      return {
        ...state,
        title: action.payload,
        editing: !state.editing
      };
    case 'ADD_MEMBER':
      return {
        ...state,
        members: [
          ...state.members,
          { name: action.payload, dragonStatus: false }
        ]
      };
    default:
      return state;
  }
};

// ADD onClick to "Update Title" button
// Dispatch a new action
// type: "UPDATE_TITLE"
// payload: new text for the tile

// Write a case for "UPDATE_TITLE"
// update the title property in state
