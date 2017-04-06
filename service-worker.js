var CACHE_NAME = 'breaklock_003';
var filesToCache = [
  './',
  './app.css',
  './app.js',
  './assets/intro.svg',
  './assets/fonts/robotomono-light-webfont.woff2',
  './assets/fonts/robotomono-light-webfont.woff',
  './assets/fonts/robotomono-light-webfont.ttf'
];

// Service worker from Google Documentation

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(filesToCache);
      })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (CACHE_NAME !== cacheName) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});