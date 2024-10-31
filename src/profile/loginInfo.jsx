import React from 'react';

import { UpdateEvent, UpdateNotifier } from './updateNotifier';
import './loginInfo.css';

export function LoginInfo(props) {
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
      newEvents = newEvents.slice(1, 10);
    }
    setEvent(newEvents);
  }

  function createMessageArray() {
    const messageArray = [];
    for (const [i, event] of events.entries()) {
      let message = 'unknown';
      if (event.type === UpdateEvent.End) {
        message = `scored ${event.value.score}`;
      } else if (event.type === UpdateEvent.Start) {
        message = `started a new game`;
      } else if (event.type === UpdateEvent.System) {
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
      Player
      <span className='player-name'>{userName}</span>
      <div id='player-messages'>{createMessageArray()}</div>
    </div>
  );
}
