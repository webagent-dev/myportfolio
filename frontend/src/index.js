import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
 import {  QueryClientProvider, QueryClient } from 'react-query'
  const queryClient = new QueryClient({
    defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: 0,
    },
  },
  })


ReactDOM.render(
    <ThemeProvider>
    <BrowserRouter>
    <QueryClientProvider client={queryClient} contextSharing={true}>
    <App />
    </QueryClientProvider>
    </BrowserRouter>
    </ThemeProvider>,
  document.getElementById('root')
);


