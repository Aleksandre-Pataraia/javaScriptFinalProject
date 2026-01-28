
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
    
    let apiTitle = document.createElement('h1')
    apiTitle.textContent = "ტოპ ბლოგები ზოგად თემებზე";
    document.getElementById("fetchapi").appendChild(apiTitle);
    
    apiTitle.style.backgroundColor = 'cian';
    apiTitle.style.color = '#FFA902';
    apiTitle.style.padding = '20px';
    apiTitle.style.fontSize = '40px';

    let postTitle = document.createElement("h3");
    postTitle.textContent = responseJS.posts[1].title;
    document.getElementById("fetchapi").appendChild(postTitle)
    
    let postContent = document.createElement("h4");
    postContent.textContent = responseJS.posts[1].body;
    document.getElementById("fetchapi").appendChild(postContent)

    let postLikes = document.createElement("p");
    postLikes.textContent = `Likes: ${responseJS.posts[1].reactions.likes}`;

    let postViews = document.createElement("p");
    postViews.textContent = `Views: ${responseJS.posts[1].views}`;

    postLikes.style.display = "flex";
    postLikes.style.position = "relative";
    postLikes.style.right = "150px";
    postLikes.style.backgroundColor = "#0e7a4d";

    postViews.style.display = "flex";
    postViews.style.position = "relative";
    postViews.style.left = "140px";
    postViews.style.bottom = "75px";
    postViews.style.backgroundColor = "#163f91";

    document.getElementById("fetchapi").appendChild(postLikes);
    document.getElementById("fetchapi").appendChild(postViews);

    let ulTitle = document.createElement('p')
    ulTitle.textContent = "თემების არჩევანი";
    document.getElementById("fetchapi").appendChild(ulTitle);
    
    ulTitle.style.backgroundColor = 'white';
    ulTitle.style.color = 'black';
    ulTitle.style.padding = '20px';
    ulTitle.style.fontSize = '30px';


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

