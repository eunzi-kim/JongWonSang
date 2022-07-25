import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import MainReducer from "./MainReducer";

const rootReducer = combineReducers({
  // Reducer들 추가
  MainReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["MainReducer"],
};

export default persistReducer(persistConfig, rootReducer);
