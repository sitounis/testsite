navigator.serviceWorker.register("./service-worker1.js").then(
(data)=>{
    console.log("SW successfull registerd");
},
(error)=>{

}
);

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
}, 2000);

function clickbutton() {
    window.webkit.messageHandlers.dostuffMessageHandler.postMessage({param1:"aa",param2:"555"});
}
