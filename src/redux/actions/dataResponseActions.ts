import { Dispatch } from "redux";

export const fetchDataResponseSuccess = (data:any) => ({
    type: "FETCH_DATA_RESPONSE_SUCCESS",
    payload: data,
  });
  
  export const fetchDataResponseFailure = (error:Error) => ({
    type: "FETCH_DATA_RESPONSE_FAILURE",
    payload: error,
  });
  
  export const fetchData = () => {
    return async (dispatch:Dispatch) => {
      try {
        const response = await fetch("/utils/api-data.json");
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        dispatch(fetchDataResponseSuccess(data));
      } catch (error:any) {
        dispatch(
          fetchDataResponseFailure(new Error(`Error fetching data: ${error.message}`))
        );
      }
    };
  };