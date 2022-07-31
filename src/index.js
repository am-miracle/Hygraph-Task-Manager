import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ApolloLink, concat } from 'apollo-link'
import App from './App';
import { HttpLink } from 'apollo-link-http';

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GCMS_API,
})

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = process.env.REACT_APP_GCMS_AUTH;
  operation.setContext({
    headers: {
      authorization: token || null,
    }
  })
  return forward(operation);
})

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>

);

