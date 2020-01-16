console.log("Service Worker file is executing....");

const pwaCache="dynamic-v2";

const staticCache= ["/main.js"];

// // Activate 
self.addEventListener('install', function(event) {

    event.waitUntil(
        caches.open(pwaCache).then(cache=>{
            cache.addAll(staticCache);
        })
    )
   

});

// // Activate 
self.addEventListener('activate', function(event) {

    let cacheCleaned= caches.keys().then((keys)=>{

        keys.forEach((key)=>{
            if(key!=pwaCache) return caches.delete(key);
        });

    })
    event.waitUntil(cacheCleaned);
});

// // Listen for network requests from the main document
self.addEventListener('fetch', function(event) {

    event.respondWith(async function() {
            // Try to get the response from a cache.
        const cache = await caches.open(pwaCache);
            
        const cachedResponse = await cache.match(event.request);
        if(cachedResponse){
            return cachedResponse;
            //event.respondWith(new Response( cachedResponse));
        }
        else{
            fetch(event.request).then(
                (data)=>{
                  cache.put(event.request,data.clone());
                  //event.respondWith(new Response(data));
                   return data;
                }
            )
        }
    }());

});
