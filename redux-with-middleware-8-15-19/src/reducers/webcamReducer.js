import {
  FETCH_WEBCAM_DATA_START,
  FETCH_WEBCAM_DATA_SUCCESS,
  FETCH_WEBCAM_DATA_FAILURE
} from '../actions';

const initialState = {
  webcams: [],
  isLoading: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEBCAM_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case FETCH_WEBCAM_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        webcams: action.payload,
        error: ''
      };
    default:
      return state;
  }
};
