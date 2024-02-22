import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.css";
import "https://cdn.jsdelivr.net/npm/akar-icons-fonts@1.1.21/src/index.min.js";
import Navbar from "./components/Navbar.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.ts";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Navbar/>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
