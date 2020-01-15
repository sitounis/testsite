var z=await navigator.serviceWorker.register("./service-worker.js");

setTimeout(() => {
    fetch("https://api.github.com/repos/twbs/bootstrap").then(
        (data)=>{
           return data.json();
        }

    )
    .then(
        (data)=>{
            document.getElementById("p1").innerHTML = JSON.stringify(data);
        }
    )
}, 100);

function clickbutton() {
    window.webkit.messageHandlers.dostuffMessageHandler.postMessage({param1:"aa",param2:"555"});
}
