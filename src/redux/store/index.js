import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouriteCompaniesReducer from "../reducers/favouriteCompaniesReducer";
import companiesReducer from "./../reducers/companiesReducer";
import localStorage from "redux-persist/es/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: process.env.local.REACT_APP_SECRET_KEY,
    }),
  ],
};

const bigReducer = combineReducers({
  favouriteCompanies: favouriteCompaniesReducer,
  companies: companiesReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export const persistor = persistStore(store);

export default store;
