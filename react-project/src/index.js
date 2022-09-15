import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from "./pages/home";
import About from "./pages/about";
import Details from "./pages/details";
import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import '@fontsource/ubuntu/400.css';
import theme from './chakraTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<App />}>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/details/:id" element={<Details />} />
                  </Route>
              </Routes>
          </BrowserRouter>
      </ChakraProvider>
  </React.StrictMode>
);
