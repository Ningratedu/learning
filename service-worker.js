// NingratEdu Service Worker
// Minimal SW: cuma buat memenuhi syarat PWA (installable),
// tanpa caching agresif karena app ini sengaja no-cache (data selalu fresh dari Firestore).

const SW_VERSION = 'ningratedu-v2';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Pass-through fetch: biarkan semua request langsung ke network,
// SW cuma "hadir" biar app bisa di-install sebagai PWA.
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
