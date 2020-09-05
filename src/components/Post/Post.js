import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const { userId, id, title, body } = props.post;

    const postStyle = {
        border: '3px solid lightgrey',
        margin: '20px',
        padding: '20px',
        borderRadius: '10px',
    }

    return (
        <div style={postStyle}>
            <p>UserId: {userId}</p>
            <p>Id: {id}</p>
            <h2>Title: {title}</h2>
            <p>{body}</p>
            <p><Link to={`/post=${id}`}>See more of {id}</Link></p>
        </div>
    );

};

export default Post;