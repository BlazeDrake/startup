import React from 'react';

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './AuthState';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>
        {authState !== AuthState.Unknown && <h1>Welcome to Profiler</h1>}
        {authState === AuthState.Authenticated && (
          <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
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


