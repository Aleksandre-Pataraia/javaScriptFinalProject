let allPosts = [];

fetch('https://dummyjson.com/posts')
.then(responseNewData => {
    if (responseNewData.status !== 200) throw "Server Error";
    return responseNewData.json();
})
.then(responseJS => {
    allPosts = responseJS.posts; 
    
    const fetchApiContainer = document.getElementById("fetchapi");
    
    let apiTitle = document.createElement('h1');
    apiTitle.textContent = "ტოპ ბლოგები ზოგად თემებზე";
    apiTitle.style.cssText = "color: #FFA902; padding: 20px; font-size: 40px;";
    fetchApiContainer.appendChild(apiTitle);

    let postTitle = document.createElement("h3");
    postTitle.textContent = allPosts[1].title;
    fetchApiContainer.appendChild(postTitle);
    
    let postContent = document.createElement("h4");
    postContent.textContent = allPosts[1].body;
    fetchApiContainer.appendChild(postContent);

    let postLikes = document.createElement("p");
    postLikes.textContent = `Likes: ${allPosts[1].reactions.likes}`;
    postLikes.style.cssText = "display: flex; position: relative; right: 150px; background-color: #0e7a4d; color: white; padding: 5px;";

    let postViews = document.createElement("p");
    postViews.textContent = `Views: ${allPosts[1].views}`;
    postViews.style.cssText = "display: flex; position: relative; left: 140px; bottom: 75px; background-color: #163f91; color: white; padding: 5px;";

    fetchApiContainer.appendChild(postLikes);
    fetchApiContainer.appendChild(postViews);


    let ulTitle = document.createElement('p');
    ulTitle.textContent = "თემების არჩევანი";
    ulTitle.style.cssText = "background-color: white; color: black; padding: 20px; font-size: 30px;";
    fetchApiContainer.appendChild(ulTitle);

    let ul = document.createElement('ul');
    allPosts.forEach(post => {
        let li = document.createElement('li');
        li.textContent = post.title;
        ul.appendChild(li);
    });
    fetchApiContainer.appendChild(ul);
})
.catch(error => console.error(error));


const searchBar = document.getElementById('searchbar');
const suggestionsBox = document.getElementById('search-suggestions');

searchBar.addEventListener('input', (e) => {
    const inputVal = e.target.value.toLowerCase();
    suggestionsBox.innerHTML = "";

    if (inputVal.length > 0) {
        const matches = allPosts.filter(post => 
            post.title.toLowerCase().includes(inputVal)
        ).slice(0, 7);

        matches.forEach(match => {
            const div = document.createElement('div');
            div.textContent = match.title;
            div.classList.add('suggestion-item');
            div.onclick = () => {
                searchBar.value = match.title;
                suggestionsBox.innerHTML = "";
            };
            suggestionsBox.appendChild(div);
        });
    }
});