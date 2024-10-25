import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Profile } from './profile/profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (<div className='body bg-dark text-light'>
    <header className="container-fluid">
      <h1>Profile Tracker</h1>
    </header>
    <main className="bg-secondary text-dark">App content goes here</main>
    <footer className="bg-dark text-white-90 container-fluid">
      <div className="container-fluid">
        <span className="text-reset">Damon Stevens</span>
        <a href="https://github.com/BlazeDrake/startup">GitHub</a>
      </div>
    </footer>
  </div>);
}