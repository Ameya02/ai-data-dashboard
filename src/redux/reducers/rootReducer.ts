import { combineReducers } from "redux";

  const dataResponseReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case "FETCH_DATA_RESPONSE_SUCCESS":
        return {
          ...state,
          data: action.payload,
          error: null,
        };
  
      case "FETCH_DATA_RESPONSE_FAILURE":
        return {
          ...state,
          data: [],
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  

const initialState = {
    data: [],
    error: null,
  };  

const rootReducer = combineReducers({
  data: dataResponseReducer,
});

export default rootReducer;