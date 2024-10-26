import React from 'react';
import './login.css';

export function Login() {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <div className="container-fluid bg-secondary text-dark">
        <h1>Login to get started</h1>
        <form method="get" action="profile">
              <div className="input-group mb-3 login-form">
                <div className="login-item">
                  <span className="input-group-text">@</span>
                  <input className="form-control" type="text" placeholder="your@email.com" />
                </div>
                <div className="login-item">
                  <span className="input-group-text">🔒</span>
                  <input className="form-control" type="password" placeholder="password" />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
              <button type="submit" className="btn btn-success">Create</button>
        </form>
      </div>
        <div className="about-info">
          <h2>About</h2>
          Have you ever had a hard time keeping track of all of your different profiles, with details such as username and which profile picture you're using?
          Well, Profile Tracker is the thing for you! You can create different username groups with it, and then track which services you use that name for!
          You can also store your profile picture there, to make it easy to keep track of what you're currently using and if you want to change it. You can even generate one to download!
          Create a profile or log in to get started!
        </div>
    </main>
  );
}