navigator.serviceWorker.register('fizz-hackathon-2015/sw.js', { scope: 'fizz-hackathon-2015' })
  .then(function(registration) {
    console.log('ServiceWorker registration successful with scope: ',
                registration.scope);
  }).catch(function(err) {
    console.log('ServiceWorker registration failed: ', err);
  });
