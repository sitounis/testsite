navigator.serviceWorker.register("./service-worker.js").then(
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
            alert(data);
        }
    )
}, 2000);