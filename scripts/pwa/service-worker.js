var cacheName = 'masterlock-dev-002';
var filesToCache = [
  '../../index.html',
  '../../style.css',
  '../../scripts/utils/patternSVG.js',
  '../../scripts/models/pattern.js',
  '../../scripts/controllers/game.ctrl.js',
  '../../scripts/controllers/menu.ctrl.js',
  '../../scripts/controllers/option.ctrl.js',
  '../../scripts/controllers/selector.ctrl.js',
  '../../scripts/controllers/lock.ctrl.js',
  '../../scripts/controllers/history.ctrl.js',
  '../../scripts/controllers/statusBar.ctrl.js',
  '../../scripts/app.js',
  '../../scripts/pwa/setup.js'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
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
    })
  );
});
