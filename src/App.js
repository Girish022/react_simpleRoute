import React,{useEffect,useState} from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom' 
import Posts from './Posts';
import axios from 'axios'

const App=()=> {
   const [posts, setPosts]=useState([])


   useEffect(() => {
     axios.get('https://jsonplaceholder.typicode.com/posts')
     .then((responce)=> {
       setPosts(responce.data)
     })
      
   }, [posts])
  

  return (
    <div>
    <Link to='/posts'> <h2>Posts</h2> </Link>
    
    <Route path='/posts' component={()=><Posts posts={posts}/>} ></Route>
     

     
    </div>
  );
}

export default App;
