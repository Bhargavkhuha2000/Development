type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  on = (eventname: string, callback: Callback): void => {
    const handlers = this.events[eventname] || [];
    handlers.push(callback);
    this.events[eventname] = handlers;
  };
  trigger = (eventname: string): void => {
    const handlers = this.events[eventname];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach((callback) => {
      callback();
    });
  };
}
