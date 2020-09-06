import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '50%',

        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const PostComment = (props) => {

    const classes = useStyles();

    // console.log('post comment', props);

    const { body, email, name, postId } = props.comment;


    // const { id } = useParams();

    // const [comments, setComments] = useState([0]);

    // console.log('clicked post comments', comments);

    // loading comments
    // useEffect(() => {
    //     const cmt_url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;

    //     fetch(cmt_url)
    //         .then(res => res.json())
    //         .then(data => setComments(data))

    // }, [])

    // random user api
    const [user, setUser] = useState([]);

    // const { }

    useEffect(() => {
        const url = 'https://randomuser.me/api/'
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data.results))

    }, [])

    // comment css
    // const commentStyles = {
    //     border: '3px solid lightgrey',
    //     margin: '20px',
    //     padding: '20px',
    //     borderRadius: '10px',
    // }

    return (
        <div >

            {/* <p>body: {body}</p>
            <p>Email: {email}</p>
            <p>Name: {name}</p>
            <p>PostID: {postId}</p> */}

            {/* {
                user.map(user => {
                    return (
                        // <p>{user.picture.thumbnail}</p>
                        <img src={user.picture.thumbnail} alt="user" />
                    )
                })
            } */}

            {/* {console.log('random user api', user)} */}

            <List className={classes.root}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        {/* <Avatar alt="Remy Sharp" src={user} /> */}
                        {
                            user.map(user => {
                                return (
                                    // <p>{user.picture.thumbnail}</p>
                                    <Avatar src={user.picture.thumbnail} alt="user" />
                                )
                            })
                        }
                    </ListItemAvatar>
                    <ListItemText
                        primary={name.toUpperCase()}

                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                </Typography>
                                {body}

                                <Typography>
                                    <p>Post ID: {postId} {email}</p>

                                </Typography>

                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                {/* <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Summer BBQ"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    to Scott, Alex, Jennifer
              </Typography>
                                {" — Wish I could come, but I'm out of town this…"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" /> */}
                {/* <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Oui Oui"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    Sandra Adams
              </Typography>
                                {' — Do you have Paris recommendations? Have you ever…'}
                            </React.Fragment>
                        }
                    />
                </ListItem> */}
            </List>

        </div>
    );
};

export default PostComment;