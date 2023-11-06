const CACHE_NAME = 'main';
const CACHE_URLS = [
    '/',
    'index.html',
    'main.bundle.js',
    'static/css/list.css',
    'static/css/login.sass',
    'static/css/signup.css'
];

this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(CACHE_URLS);
            })
    )
})

this.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse;
                }

                return fetch(event.request);
            })
    );
});
