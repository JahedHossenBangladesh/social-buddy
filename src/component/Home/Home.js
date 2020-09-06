import React, { useState, useEffect } from 'react';
import Posts from './Posts/Posts';



const Home = () => {
   

const [posts,setPosts] = useState([]);
useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => res.json())
    .then(data => setPosts(data))
},[])

    return (
  <div>
            <h2 style={{textAlign:'center'}}>Total posts is {posts.length}</h2>
            <hr/>
{
    posts.map(post =><Posts post ={post}></Posts>)
}
  </div>
        
    );
};

export default Home;