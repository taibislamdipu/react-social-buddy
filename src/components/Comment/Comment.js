import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Comment = () => {

    const { id } = useParams();

    const [comments, setComments] = useState([]);

    const [post, setPosts] = useState({});

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
        </div>
    );
};

export default Comment;