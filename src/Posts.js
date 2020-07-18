import React from 'react'

 const Posts=({posts})=> {
    return (
        <div>
  
           <ul>
               {posts.map((post)=>{
                   return (<div class="card">
                 
                   <div class="card-body">
                     <h5 class="card-title">{post.title}</h5>
                     <p class="card-text">{post.body}</p>
                     
                   </div>
                 </div>)
               })}
           </ul>
        </div>
    )
}

export default Posts
