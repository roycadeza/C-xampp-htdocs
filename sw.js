self.addEventListener('install',e=>{
  e.waitUntil(caches.open('rooyfit').then(c=>c.addAll(['rooyfit.html','manifest.json','logo.png'])));
});
self.addEventListener('fetch',e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
