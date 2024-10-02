import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react"
import { GlobalStyle } from './styles/GlobalStyle';
import { GlobalProvide } from './context/Globalcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-fj8jslyp04ehv80t.us.auth0.com"
    clientId="4dqZS4OBegfn4rwRKjWEXXqmdvZLxn19"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <React.StrictMode>
  <GlobalProvide>
  <GlobalStyle />
  <App />
  </GlobalProvide>

</React.StrictMode>
</Auth0Provider>
);

