import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store from "./store/store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
  
    <Provider store={store}>
    <GoogleOAuthProvider
      clientId={
        "110842779036-c2on3clemarna3r6u72uhbssbhl6jctf.apps.googleusercontent.com"
      }
      // key={process.env.Google_client_secret}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GoogleOAuthProvider>
    </Provider>
  </React.Fragment>
);
