import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostComment = (props) => {

    console.log('post comment', props);

    const { body, email, name, postId } = props.comment;

    const { id } = useParams();

    const [comments, setComments] = useState([0]);

    console.log('clicked post comments', comments);

    useEffect(() => {
        const cmt_url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;

        fetch(cmt_url)
            .then(res => res.json())
            .then(data => setComments(data))

    }, [])

    const commentStyles = {
        border: '3px solid tomato',
        margin: '20px',
        padding: '20px',
        borderRadius: '10px',
    }

    return (
        <div style={commentStyles}>
            <p>body: {body}</p>
            <p>Email: {email}</p>
            <p>Name: {name}</p>
            <p>PostID: {postId}</p>
        </div>
    );
};

export default PostComment;