import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Profile } from './profile/profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className='body bg-dark text-light'>
        <header className="container-fluid">
          <h1>Profile Tracker</h1>
        </header>
        <Routes>
          <Route path='/' element={<Login />} exact />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <footer className="bg-dark text-white-90 container-fluid">
          <div className="container-fluid">
            <span className="text-reset">Damon Stevens</span>
            <a href="https://github.com/BlazeDrake/startup">GitHub</a>
          </div>
        </footer>
      </div>
    </BrowserRouter>

  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}