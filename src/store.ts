import { configureStore,  } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import rootReducer from "./redux/reducers/rootReducer";

// Configured the Redux store using configureStore
const store = configureStore({
  reducer: rootReducer, // Set the rootReducer to manage the state
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    thunk: true
  }) // Used redux-thunk middleware for handling asynchronous actions
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store;