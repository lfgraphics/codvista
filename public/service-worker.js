const CACHE_NAME = 'Cod Vista';

// Check if `self` is defined (browser environment) before using it
if (typeof self !== 'undefined') {
    self.addEventListener('install', (event) => {
        event.waitUntil(
            caches.open(CACHE_NAME).then((cache) => {
                return cache.addAll([
                    '/',
                    'logo.png',
                    'logo.svg',
                    'manifest.json',
                    'beep.mp3',
                ]);
            })
        );
    });

    self.addEventListener('fetch', (event) => {
        event.respondWith(
            caches.match(event.request).then((response) => {
                return response || fetch(event.request);
            })
        );
    });
}