var cacheName = 'masterlock-dev-010';
var filesToCache = [
  '/',
  '/style.css',
  '/scripts/config.js',
  '/scripts/utils/patternSVG.js',
  '/scripts/models/pattern.js',
  '/scripts/controllers/game.ctrl.js',
  '/scripts/controllers/menu.ctrl.js',
  '/scripts/controllers/option.ctrl.js',
  '/scripts/controllers/selector.ctrl.js',
  '/scripts/controllers/lock.ctrl.js',
  '/scripts/controllers/history.ctrl.js',
  '/scripts/controllers/statusBar.ctrl.js',
  '/scripts/controllers/countdown.ctrl.js',
  '/scripts/app.js'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    }).then(function() {
        // `skipWaiting()` forces the waiting ServiceWorker to become the
        // active ServiceWorker, triggering the `onactivate` event.
        // Together with `Clients.claim()` this allows a worker to take effect
        // immediately in the client(s).
        return self.skipWaiting();
      })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});


self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
      // Go to the network to ask for that resource
      return fetch(e.request).then(function(networkResponse) {
        // Add a copy of the response to the cache (updating the old version)
        cache.put(e.request, networkResponse.clone());
        // Respond with it
        return networkResponse;
      }).catch(function() {
        // If there is no internet connection, try to match the request
        // to some of our cached resources
        return cache.match(e.request);
      })
    })
  );
});
