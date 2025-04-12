"use client";

import Loading from "@/components/Loading";
import { persistor, store } from "@/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
      {/* PersistGate delays rendering your app until Redux finishes loading the saved state from localStorage. */}
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;