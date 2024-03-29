import React from "react";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";
import AppBreadCrumb from "./components/bread-crumb/bread-crumb.component";
import HomePage from "./components/home-page/home-page.component";
//import { persistCache } from "apollo-cache-persist";
/*--------------------------------------------------------
  MOBX CONFIG
--------------------------------------------------------*/
import { Provider as MobXProvider } from "mobx-react";
import { store } from "./mobx/store.mobx";
/*----------------------------------
  Styles
-----------------------------------*/
import "./App.css";
import IosHome from "react-ionicons/lib/IosHome";
/*--------------------------------------------------------
 COMPONENT: APP
--------------------------------------------------------*/
const App = () => {
  /*----------------------------
    Set up Apollo
  ----------------------------*/
  const cache = new InMemoryCache();
  //persistCache({ cache, storage: window.localStorage });
  const link = createUploadLink({
    uri: "/graphql",
  });
  const client = new ApolloClient({
    link,
    cache,
  });

  /*----------------------------
    Rendering
  ----------------------------*/
  return (
    <ApolloProvider client={client}>
      <MobXProvider store={store}>
        <Router>
          <AppBreadCrumb
            title={
              <>
                <span className="home-icon">
                  <IosHome fontSize="24px" color="#0f4c75" />
                </span>
                Home
              </>
            }
            path="/"
            component={HomePage}
          />
        </Router>
      </MobXProvider>
    </ApolloProvider>
  );
};

export default App;
