import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//apollo client
import {ApolloClient,ApolloProvider, InMemoryCache} from '@apollo/client';
////App
import App from './App';

const client = new ApolloClient({
  uri: "https://spacexdata.herokuapp.com/graphql",
  cache: new InMemoryCache()
})as any

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
    
  </ApolloProvider>,
  document.getElementById('root')
);

