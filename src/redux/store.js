import { configureStore } from "@reduxjs/toolkit";
import reducer from "./combine.reducers";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga/rootSaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;
