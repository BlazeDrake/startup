import React from 'react';

import { UpdateEvent, UpdateNotifier } from './updateNotifier';
import './loginInfo.css';

export default function LoginInfo(props) {
  const userName = props.userName;

  const [events, setEvent] = React.useState([]);

  React.useEffect(() => {
    UpdateNotifier.addHandler(handleGameEvent);

    return () => {
      UpdateNotifier.removeHandler(handleGameEvent);
    };
  });

  function handleGameEvent(event) {
    let newEvents = [event, ...events];
    if (newEvents.length > 10) {
      newEvents = newEvents.slice(0, 9);
    }
    setEvent(newEvents);
  }

  function createMessageArray() {
    const messageArray = [];
    for (const [i, event] of events.entries()) {
      let message = 'unknown';
      if (event.type === UpdateEvent.Add) {
        message = `added a profile`;
      } 
      else if (event.type === UpdateEvent.Remove) {
        message = `removed a profile`;
      } 
      else if (event.type === UpdateEvent.System) {
        message = event.value.msg;
      }

      messageArray.push(
        <div key={i} className='event'>
          <span className={'player-event'}>{event.from.split('@')[0]}</span>
          {message}
        </div>
      );
    }
    return messageArray;
  }

  return (
    <div className='players'>
      <span className='player-name'>{userName}</span>
      currently logged in
      <div>
      <button onClick={props.logOut} className="btn btn-primary">Logout</button>
      </div>
      <div id='player-messages'>{createMessageArray()}</div>
    </div>
  );
}
