var cacheName = 'r2-starter-kit';
var filesToCache = [
  '0.23d1455be84d9c2deee3.js','1.23d1455be84d9c2deee3.js','app.23d1455be84d9c2deee3.js','redux.23d1455be84d9c2deee3.js','react.23d1455be84d9c2deee3.js','manifest.23d1455be84d9c2deee3.js'
];

self.addEventListener('install', e => {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate',  e => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});