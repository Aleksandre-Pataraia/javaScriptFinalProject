
fetch('https://dummyjson.com/posts', {
    method:"GET"
})
.then(function(responseNewData){
    if (responseNewData.status !== 200){
        throw "Server Error"
    }
    return responseNewData.json();
})
.then(function(responseJS){
    console.log(responseJS)
    let postTitle = document.createElement("h3");
    postTitle.textContent = responseJS.posts[1].title;
    document.getElementById("fetchapi").appendChild(postTitle)
})
.catch(function(error){
    if(error === 404){
        let pNewError = document.createElement("p");
        pNewError.textContent = 'Page Not Found';
        document.getElementById("fetchapi").appendChild(pNewError);
    }
    else{
        
    }
})