const pusher = new Pusher('APP_KEY', {
  cluster: 'APP_CLUSTER'
});

const channel = pusher.subscribe('my-channel');

channel.bind('my-event', function(data) {
  console.log('An event was triggered with message: ' + data.message);
});