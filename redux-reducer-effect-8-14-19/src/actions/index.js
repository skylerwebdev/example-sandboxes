// STEP 3 - build an action creator for any event that might happen in your app that should cause your state to be updated

// action creator - fn that "creates" and _returns_ actions
export const toggleTitleEditor = () => {
  console.log('action creator was invoked');
  return { type: 'TOGGLE_EDITING' };
};

// write an action creator for update title
export const updateTitle = title => {
  return {
    type: 'UPDATE_TITLE',
    payload: title
  };
};

// write an action creator to toggle members' dragon status

export const addNewMember = name => {
  return { type: 'ADD_MEMBER', payload: name };
};
