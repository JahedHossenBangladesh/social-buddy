import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentDetail from '../CommentDetail/CommentDetail';

const Comment = () => {
   const {commentId} = useParams()
  const [comment,setComment] = useState([])
useEffect(() =>{

fetch(`https://jsonplaceholder.typicode.com/comments?postId=${commentId}`)
.then(res => res.json())
.then(data =>  setComment(data))


},[])


    return (
        <div>
            {
                comment.map(comment => <CommentDetail comment={comment}></CommentDetail>)
            }
        </div>
    );
};

export default Comment;