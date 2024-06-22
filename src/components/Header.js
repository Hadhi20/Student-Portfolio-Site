import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="logo">My Portfolio</div>
    <nav className="nav">
      <a href="/">Home</a>
      <a href="/portfolio">Portfolio</a>
      <a href="/projects">Projects</a>
      <a href="/blogs">Blogs</a>
      <a href="/education">Education</a>
      <a href="/login">Login</a>
    </nav>
  </header>
);

export default Header;
