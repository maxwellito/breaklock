if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('scripts/pwa/service-worker.js')
    .then(function() { console.log('Service Worker Registered'); });
}
