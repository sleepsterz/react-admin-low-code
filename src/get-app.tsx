import React from 'react'
import App from './App'
import buildHasuraProvider from 'ra-data-hasura-graphql';

const uri = "https://hasuracsp.hasura.app/v1/graphql";

export default async function getApp() {
  const provider = await buildHasuraProvider({ clientOptions: { uri: uri }})
  return () => (
    <App dataProvider={provider} />
  )
}