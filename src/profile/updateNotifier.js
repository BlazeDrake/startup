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
      // Simulate chat messages that will eventually come over WebSocket
      setInterval(() => {
        const id = Math.floor(Math.random() * 3000);
        const date = new Date().toLocaleDateString();
        const userName = 'User'+id;
        this.broadcastEvent(userName, Math.random()>0.5?UpdateEvent.Add:UpdateEvent.Remove, { name: userName});
      }, 5000);
    }
  
    broadcastEvent(from, type, value) {
      const event = new EventMessage(from, type, value);
      this.receiveEvent(event);
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
  