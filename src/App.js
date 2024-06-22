import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Education from './components/Education';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

const App = () => (
  <Router>
    <div className="container">
      <Header />
      <div className="content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/projects" component={Projects} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/education" component={Education} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
