import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./rootReducer";
import { baseApi } from "./api/baseApi";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "result"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/*
You're saying:
“Hey Redux! When user logs in, also save that slice into localStorage.
And when the app reloads, get it back and put it into Redux again.”
This is called persistence + rehydration.
*/

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
