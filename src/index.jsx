import react from "react";
import reactDom from "react-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { useParams } from "react-router-dom";

import App from "./componentes/App.jsx"

import "./reset.css"
import "./estilo.css"

reactDom.render(<App />, document.querySelector(".root"));