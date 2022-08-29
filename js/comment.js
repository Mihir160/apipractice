const loadComments = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data))
}

const displayComment = (commts) =>{
//    console.log()
   const commentContainer = document.getElementById('comment-container')
   for(const commt of commts){
       
        if(commt.id <= 20){
        // console.log(commt)
        const comtDiv = document.createElement('div')
        comtDiv.innerHTML =`
         <h1>Name: ${commt.name}</h1>
         <p>Comment : ${commt.body} "</p>
         <button onclick="postIDcollect('${commt.id}')">Post</button>
        `
        commentContainer.appendChild(comtDiv);
        }
        
     }
     
}


const postIDcollect = (postId) => {
     console.log(postId)
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${postId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayPost(data[0]))
}

const displayPost = post => {
    console.log(post);
    const postDetails = document.getElementById('post-container')
    postDetails.innerHTML = `
    <p>Post : ${post.body}</p>
    `
}


loadComments();