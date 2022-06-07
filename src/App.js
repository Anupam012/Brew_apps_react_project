import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


import './App.css';

import home_page from './pages/home_page.js'

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/home-page" component={home_page} ></Route>
      </div>
    </Router>
  );
}

export default App; 
