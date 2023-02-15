import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'
import '../styles/globals.css'

const client = new ApolloClient({
  uri: 'http://127.0.0.1:3001/',
  cache: new InMemoryCache()
})

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
