const CACHE='me-v52';
const ASSETS=["./", "./index.html", "./manifest.webmanifest", "./logo-mon-entreprise.jpg", "./icon-192.png", "./icon-512.png", "./saphir.jpg", "./luminiz.jpg", "./waze.jpg", "./maps.jpg", "./mysilae.jpg", "./edocperso.jpg", "./campus.jpg", "./unice.jpg"];
self.addEventListener('install',e=>{self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return; e.respondWith(fetch(e.request,{cache:'no-store'}).then(r=>{const c=r.clone();caches.open(CACHE).then(cache=>cache.put(e.request,c));return r;}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))));});
