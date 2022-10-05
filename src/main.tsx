import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from "react-router-dom";
import {store, persistor} from "./store";
import {Provider as ReduxProvider} from "react-redux";
import {PersistGate} from "redux-persist/lib/integration/react";
import {HelmetProvider} from "react-helmet-async";
import LoadingScreen from "./shared/components/LoadingScreen";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <HelmetProvider>
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor} loading={<LoadingScreen/>}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
        </PersistGate>
      </ReduxProvider>
    </HelmetProvider>

  // </React.StrictMode>
)
