import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";

import { withClientState } from "apollo-link-state";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";
import _ from "lodash";
import { ApolloLink } from "apollo-link";

import usersResolver from "../resolvers/users";
import { Router } from "../config/router";

const cache = new InMemoryCache({ dataIdFromObject: o => o.id });

persistCache({
  cache,
  storage: window.localStorage
});

const stateLink = withClientState({
  cache,
  ..._.merge(usersResolver),
  // key:"prueba-de-cache"
});

const client = new ApolloClient({
  link: ApolloLink.from([
    stateLink
    // new HttpLink({ uri: "http://192.168.1.53:3000/graphql" })
  ]),
  cache
  // dataIdFromObject: o => o.id,
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    );
  }
}

export default App;
