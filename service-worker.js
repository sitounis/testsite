console.log("Service Worker file is executing....");

// // Activate 
self.addEventListener('install', function(event) {
    // ...
    console.log("Service Worker install....");

//   let intallPromise = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve();
//     }, 3000);  
//   });
//   event.waitUntil(intallPromise);
});
// // Activate 
self.addEventListener('activate', function(event) {
    // ...
    console.log("Service Worker activate....");

    //debugger;

});

// // Listen for network requests from the main document
self.addEventListener('fetch', function(event) {
    // ...
   // debugger;
   // if(event.request.url=="https://api.github.com/repos/twbs/bootstrap"){
        //debugger;
        event.respondWith(async function() {
            // Try to get the response from a cache.
        const cache = await caches.open('dynamic-v1');
            
        const cachedResponse = await cache.match(event.request);
        if(cachedResponse){
            //return cachedResponse;
            event.respondWith(new Response( cachedResponse));
        }
        else{
            fetch(event.request).then(
                (data)=>{
                 // cache.put(event.request,data.clone());
                  event.respondWith(new Response(data));
                   // return data;
                }
            )
        }
    }());


});

//}
        // debugger;
        //     if (cachedResponse) {
        //       // If we found a match in the cache, return it, but also
        //       // update the entry in the cache in the background.
        //       event.waitUntil(cache.add(event.request));
        //       return cachedResponse;
        //     }
        
        //     // If we didn't find a match in the cache, use the network.
        //     return fetch(event.request);
        //   }());
        // fetch(event.request).then(
        //     (data)=>{
        //         caches.open("v1")
        //         return data.json();
        //         // debugger;
        //         // return data;
        //         // data
        //     }
        // )
        // .then(
        //     (data1)=>{
        //         debugger;
        //         return event;
        //     }
        // )
    //}
