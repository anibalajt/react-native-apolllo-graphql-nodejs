import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Root } from './config/router';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag'
import { withClientState } from 'apollo-link-state';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';
import { ApolloLink } from 'apollo-link';


const cache =  new InMemoryCache({  dataIdFromObject: o => o.id });

persistCache({
  cache,
  storage: AsyncStorage,
  trigger: 'background'
});

const defaultState = {
  placeHolder:{
    __typename: 'placeHolder',
    email: 'Email',
    password: 'password',
    rpassword: 'rpassword'
  }
}

const stateLink = withClientState({
  cache,
  defaults: defaultState,
  resolvers: {
    Mutation: {
      updatePlaceHolder: ( _, { index, value }, { cache }) => {
        
        const query = gql`
        query GetPlaceHolder {
          placeHolder @client {
            email
            password
            rpassword
          }
        }
        `
        const previous = cache.readQuery({ query })
        const data = {
          placeHolder: {
            ...previous.placeHolder,
            [index]: value
          }
        }
        console.log(query, data)
        cache.writeQuery({ query, data })
      },
      // resetPlaceHolder: (_, d, { cache }) => {
      //   cache.writeData({ defaultState })
      // }
    }
  }
})

const client = new ApolloClient({
  link: ApolloLink.from([
    stateLink,
    new HttpLink({uri:'http://192.168.1.53:3000/graphql'})
  ]),
  cache
  // dataIdFromObject: o => o.id,
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Root />
      </ApolloProvider>
    )
  }
}

export default App;
