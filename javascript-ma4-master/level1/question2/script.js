fetch("https://jsonplaceholder.typicode.com/todos")
.then(function(response) {
    return(response.json())
})
.then(function(response) {
    
    for (var i = 0; i < response.length; i++) {
        var startNumber = i + 1;
        var unorderedList = document.createElement("ul");
        document.getElementById("li").appendChild(unorderedList);
        
        unorderedList.innerHTML += "<h1><pre> TODO card number " + startNumber + "</pre>";
        unorderedList.innerHTML += "<pre>userId: " + response[i].userId + "</pre>";
        unorderedList.innerHTML += "<pre>id: " + response[i].id + "</pre>";
        unorderedList.innerHTML += "<pre>title: " + response[i].title + "</pre>";
        unorderedList.innerHTML +=  "<pre>completed: " + response[i].title + "</pre>";
        
//CSS styling
unorderedList.style.color = "#DD00E3";
unorderedList.style.backgroundColor = "#E3A4E2"
unorderedList.style.textAlign = "center";
unorderedList.style.fontSize = "18px";
unorderedList.style.width = "900px";
    }    
})

.catch(err => console.log(err))

