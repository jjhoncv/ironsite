import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunkMiddleware from "redux-thunk";

import { authReducer } from "./auth";
import { productReducer } from "./product";
import { bannerReducer } from "./banner";

const authPersistConfig = {
  key: "auth",
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  product: productReducer,
  banner: bannerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
const persistor = persistStore(store);

export { store, persistor };
