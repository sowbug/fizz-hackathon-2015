var APP_PREFIX = 'fizz-hackathon-2015/';
var CACHE_NAME = 'my-site-cache-v2';
var urlsToCache = [
  APP_PREFIX + 'index.html',
  APP_PREFIX + 'index.js'
];

console.log('sw.js');

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  console.log('fetch event', event);
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        console.log('response', response);
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request);
      })
  );
});
