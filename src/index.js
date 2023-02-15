import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";

ReactDOM.render(
  <BrowserRouter>
    <AmplifyProvider>
      <Authenticator.Provider>
        <App />
      </Authenticator.Provider>
    </AmplifyProvider> 
  </BrowserRouter>,
  document.getElementById('root')
);