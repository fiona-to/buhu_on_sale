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
import "./App.scss";

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
    uri: "/graphql"
  });
  const client = new ApolloClient({
    link,
    cache
  });

  /*----------------------------
    Rendering
  ----------------------------*/
  return (
    <ApolloProvider client={client}>
      <MobXProvider store={store}>
        <div className="App">
          <Router>
            <AppBreadCrumb title="Home" path="/" component={HomePage} />
          </Router>
        </div>
      </MobXProvider>
    </ApolloProvider>
  );
};

export default App;
