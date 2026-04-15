// service-worker.js
const CACHE_NAME = 'kss-cache-v1';
const URLS_TO_CACHE = [
  '/kss-website/',
  '/kss-website/index.html',
  '/kss-website/offline.html',
  '/kss-website/css/style.css',
  '/kss-website/css/bootstrap.min.css',
  '/kss-website/js/main.js',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      return cached || fetch(e.request).catch(() =>
        caches.match('/kss-website/offline.html')
      );
    })
  );
});