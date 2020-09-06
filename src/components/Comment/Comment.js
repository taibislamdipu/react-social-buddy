import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostComment from '../PostComment/PostComment';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 'auto',
        margin: '20px',
    },
    media: {
        height: 140,
    },
});

const Comment = () => {


    const classes = useStyles();

    const { id } = useParams();

    // console.log('clicked post id', id); 
    // random user api id

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

    // const { title, body } = props.post;

    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://blog.codemagic.io/uploads/2020/08/codemagic-blog-how-to-build-react-native-ui-app-with-material-ui.png"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {post.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {post.body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
        </Button>
                    <Button size="small" color="primary">
                        Learn More
        </Button>
                </CardActions>
            </Card>

            <Card className={classes.root}>
                {/* <h2>Ths is comments of user id: {id}</h2> */}
                {/* <h1>{post.title}</h1> */}
                {/* <h2>{post.body}</h2> */}
                <h1>Post Comments</h1>
                <hr />
                {
                    comments.map(comment => <PostComment comment={comment}></PostComment>)
                }
            </Card>
        </div>
    );
};

export default Comment;