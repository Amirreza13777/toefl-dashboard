const CACHE_NAME = 'toefl-dashboard-v1';
const ASSETS = [
  '/toefl-dashboard/',
  '/toefl-dashboard/index.html',
  '/toefl-dashboard/manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
