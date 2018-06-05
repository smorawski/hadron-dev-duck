export default {
  events: {
    listeners: [
      {
        name: 'Route Listener',
        event: 'handleRequestCallbackEvent',
        handler: (callback, ...args) => {
          console.log('Route response: ', args);
          return callback(...args);
        },
      },
    ],
  }
};
