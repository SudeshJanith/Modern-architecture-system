import React from 'react';
import './App.css';
import './components/css/custom.css';
// import './css/tailwind.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import Login from "./Login";
import Header from "./components/inc/Header";
import Footer from "./components/inc/Footer";



function App() {
  return (
  <Router>
      
      <Header />

      


    
      <Footer />

  </Router>
  );
}

export default App;
