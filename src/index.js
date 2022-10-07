import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/app/App";
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <React.Strictmode>
      <App />
    </React.Strictmode>
  </Router>,
  document.getElementById('root')
);
