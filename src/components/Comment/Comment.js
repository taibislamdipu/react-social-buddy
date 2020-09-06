import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostComment from '../PostComment/PostComment';

const Comment = () => {

    const { id } = useParams();

    console.log('clicked post id', id);

    const [comments, setComments] = useState([]);

    // console.log('clicked post comments', comments);

    const [post, setPosts] = useState({});

    console.log('clicked post details', post);

    useEffect(() => {
        const cmt_url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;

        fetch(cmt_url)
            .then(res => res.json())
            .then(data => setComments(data))

    }, [])

    useEffect(() => {
        const post_url = `https://jsonplaceholder.typicode.com/posts/${id}`;

        fetch(post_url)
            .then(res => res.json())
            .then(data => setPosts(data))

    }, [])



    return (
        <div>
            <h2>Ths is comments of user id: {id}</h2>
            <h1>{post.title}</h1>
            <h2>{post.body}</h2>
            <h1>Post Comments</h1>
            <hr />
            {
                comments.map(comment => <PostComment comment={comment}></PostComment>)
            }

        </div>
    );
};

export default Comment;