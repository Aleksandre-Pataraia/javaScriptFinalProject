
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
    
    let postContent = document.createElement("h2");
    postContent.textContent = responseJS.posts[1].body;
    document.getElementById("fetchapi").appendChild(postContent)

    let ul = document.createElement('ul');
    responseJS.posts.forEach( (post)=> {
        let li = document.createElement('li');
        li.textContent = post.title;
        ul.appendChild(li);
        document.getElementById("fetchapi").appendChild(ul);
    });
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

