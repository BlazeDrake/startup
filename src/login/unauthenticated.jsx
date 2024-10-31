import React from 'react';

import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  async function createUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  return (
    <div className="container-fluid bg-secondary text-dark">
    <h1>Login to get started</h1>
          <div className="input-group mb-3 login-form">
            <div className="login-item">
              <span className="input-group-text">@</span>
              <input className="form-control" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="your@email.com" />
            </div>
            <div className="login-item">
              <span className="input-group-text">🔒</span>
              <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" />
            </div>
          </div>
          <Button variant="primary" onClick={() => loginUser()} disabled={!userName || !password}>Login</Button>
          <Button variant="success" onClick={() => createUser()} disabled={!userName || !password}>Create</Button>

          <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
  </div>
  );
}