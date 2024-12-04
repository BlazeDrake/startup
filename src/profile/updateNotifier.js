const UpdateEvent = {
    System: 'system',
    Add: 'add',
    Remove: 'remove'
  };
  
  class EventMessage {
    constructor(from, type, value) {
      this.from = from;
      this.type = type;
      this.value = value;
    }
  }
  
  class UpdateEventNotifier {
    events = [];
    handlers = [];
  
    constructor() {

      //Set up the websocket
      let port =3000;// window.location.port;
      const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
      this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
      this.socket.onopen = (event) => {
        this.receiveEvent(new EventMessage('System', UpdateEvent.System, { msg: 'connected' }));
      };
      this.socket.onclose = (event) => {
        this.receiveEvent(new EventMessage('System', UpdateEvent.System, { msg: 'disconnected' }));
      };
      this.socket.onmessage = async (msg) => {
        try {
          const event = JSON.parse(await msg.data.text());
          this.receiveEvent(event);
        } catch {}
      };

      /*
      // Debug option where it randomly sends messages over websocket
      setInterval(() => {
        const id = Math.floor(Math.random() * 3000);
        const date = new Date().toLocaleDateString();
        const userName = 'User'+id;
        this.broadcastEvent(userName, Math.random()>0.5?UpdateEvent.Add:UpdateEvent.Remove, { name: userName});
      }, 5000);*/
    }
  
    broadcastEvent(from, type, value) {
      const event = new EventMessage(from, type, value);
      this.socket.send(JSON.stringify(event));
      //this.receiveEvent(event);
    }
  
    addHandler(handler) {
      this.handlers.push(handler);
    }
  
    removeHandler(handler) {
      this.handlers.filter((h) => h !== handler);
    }
  
    receiveEvent(event) {
      this.events.push(event);
  
      this.events.forEach((e) => {
        this.handlers.forEach((handler) => {
          handler(e);
        });
      });
    }
  }
  
  const UpdateNotifier = new UpdateEventNotifier();
  export { UpdateEvent, UpdateNotifier};
  