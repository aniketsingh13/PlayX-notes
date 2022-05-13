import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import { AuthProvider } from "./Context/AuthContex";
import { NoteProvider } from "./Context/NoteContext";
import { FilterProvider } from "./Context/FilterContext";



// Call make Server
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <BrowserRouter>
     <AuthProvider>
       <NoteProvider>
         <FilterProvider>
    <App />
    </FilterProvider>
    </NoteProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
