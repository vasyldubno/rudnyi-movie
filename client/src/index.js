import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Container, CssBaseline } from "@mui/material";
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
// pages
import { Home } from './pages/Home';
import { Recommend } from './pages/Recommend';
import { Settings } from './pages/Settings';

const client = new ApolloClient({
  uri: `${process.env.BASE_URL}/graphql`,
  cache: new InMemoryCache(),
  connectToDevTools: true
})


const container = document.getElementById('root')
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <CssBaseline />
      <Navigation/>
        <Container maxWidth='xl' sx={{ backgroundColor: (theme) => theme.palette.grey[100] }}>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='settings' element={<Settings />}/>
            <Route path='recommend' element={<Recommend/>}/>
          </Routes>
        </Container>
    </ApolloProvider>
  </BrowserRouter>
  
);
