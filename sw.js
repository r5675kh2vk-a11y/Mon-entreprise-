const CACHE='me-v5';
const ASSETS=["./", "./index.html", "./manifest.webmanifest", "./logo-mon-entreprise.jpg", "./icon-192.png", "./icon-512.png", "./saphir.jpg", "./luminiz.jpg", "./waze.jpg", "./maps.jpg", "./mysilae.jpg", "./edocperso.jpg", "./campus.jpg", "./unice.jpg"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(CACHE).then(cache=>cache.put(e.request,c));return r;}).catch(()=>caches.match(e.request)));});
