import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
// slices
import authReducer from "./slices/auth";
import boardsReducer from "./slices/boards";


// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
  auth: authReducer,
  boards: boardsReducer,
});

export { rootPersistConfig, rootReducer };
