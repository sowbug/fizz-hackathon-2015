importScripts('serviceworker-cache-polyfill.js');

var APP_PREFIX = '/fizz-hackathon-2015/';
var CACHE_NAME = 'my-site-cache-v2';
var urlsToCache = [
  APP_PREFIX + '',
  APP_PREFIX + 'index.js'
];

self.addEventListener('install', function(event) {
  console.log('install event', event);

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return caches.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  console.log('fetch event', event);
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        console.log('response', response);
        return response || fetch(event.request);
      })
  );
});
