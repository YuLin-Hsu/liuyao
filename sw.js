const CACHE_NAME = 'liuyao-cache-v20';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json',
    './icon_192.png',
    './icon_512.png',
    'https://cdnjs.cloudflare.com/ajax/libs/lunar-javascript/1.7.4/lunar.min.js'
];

// Install Service Worker and cache resources
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Caching all static assets');
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .then(() => self.skipWaiting())
    );
});

// Activate Service Worker and clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    console.log('[Service Worker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        }).then(() => self.clients.claim())
    );
});

// Fetch events: Network-first fallback to Cache strategy
self.addEventListener('fetch', (event) => {
    // Only intercept local and allowed CDN resources
    const requestUrl = new URL(event.request.url);
    if (
        requestUrl.origin === location.origin ||
        requestUrl.origin.includes('cdnjs.cloudflare.com')
    ) {
        event.respondWith(
            fetch(event.request)
                .then((networkResponse) => {
                    // Cache the new response if valid
                    if (networkResponse && networkResponse.status === 200) {
                        const responseClone = networkResponse.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, responseClone);
                        });
                    }
                    return networkResponse;
                })
                .catch(() => {
                    // Fallback to cache if network fails
                    return caches.match(event.request);
                })
        );
    }
});
