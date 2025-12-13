const CACHE_NAME = "tarot-cache-v15"; // bump para forzar actualización de assets
const urlsToCache = [
  "./",
  "./index.html",
  "./app.js",
  "./style.css",
  "./manifest.json"
];

// Instalación: cacheamos los archivos
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting(); // Activar inmediatamente
});

// Activación: limpiamos caches viejos
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    ))
  );
  self.clients.claim(); // Controlar todas las pestañas inmediatamente
});

// Fetch: usamos cache si está disponible, luego network
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).then(response => {
        // Cachear respuestas exitosas en runtime
        if (response && response.status === 200) {
          const cache = caches.open(CACHE_NAME);
          cache.then(c => c.put(event.request, response.clone()));
        }
        return response;
      }).catch(() => {
        // Fallback si no hay conexión y no está en cache
        return caches.match('./index.html');
      });
    })
  );
});
