// so much empty
const postList = document.getElementById("postList"); 

const renderPosts = (posts)=> {
    postList.innerHTML = ""; 
    posts.forEach((post) =>{
        const postElement = document.createElement("div")
        postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr/>
        `;
        postList.appendChild(postElement); 

    })

}
fetch ("https://jsonplaceholder.typicode.com/posts?_limit=5")
.then(function(response){
    const jsonResponse = response.json()
    return jsonResopnse
}).then(function(data){
    renderPost(data);
})
.catch((error)=> console.error("Error fething posts:", error))
