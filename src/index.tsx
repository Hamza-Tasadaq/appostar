import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { ToastContainer } from "react-toastify"

import './index.css';

const store = configureStore({ reducer: rootReducer, devTools: true });
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // With SSR, we usually want to set some default staleTime
      // above 0 to avoid refetching immediately on the client
      staleTime: Infinity,
      refetchInterval: false, // or remove this line to disable automatic refetching
      refetchOnWindowFocus: false, // Disable refetching on window focus if not needed
      retry: false, // Disable retrying failed requests if not needed
    },
  },
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <React.Fragment>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App />
            <ToastContainer />
          </BrowserRouter>
        </React.Fragment>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
