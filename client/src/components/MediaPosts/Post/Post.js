import React from 'react';
import styles from "./styles";
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import moment from 'moment';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';
import { deleteMedia, likeMedia } from '../../../actions/post';


const Post = ({media, setId}) => {
    const style = styles();
    const dispatch = useDispatch();
    return(
        <Card className={style.card}> 
            <CardMedia className={style.media} image={media.upload} title={media.title}/>
            <div className={style.overlay}>
                <Typography variant="h6">{media.user}</Typography>
                <Typography variant="body2">{moment(media.createdAt).fromNow()}</Typography>
            </div>
            <div className={style.overlay2}>
                <Button style={{color:'white'}} size="small" onClick={() => setId(media._id)}>
                    <MoreHorizIcon fontSize="medium" />
                </Button>
            </div> 
            <div className={style.details}>
                <Typography variant="h5" color="textSecondary">{media.title}</Typography>
            </div>
            <CardContent>
            <Typography className={style.title} variant="h6" component="p" gutterBottom>{media.caption}</Typography>
            <Typography variant="body2" color="textSecondary">{media.hashtags}</Typography>
            </CardContent>
            <CardActions className={style.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likeMedia(media._id))}>
                    <ThumbUpAltIcon fontSize="small" />Like {media.numOfLikes}</Button>
                <Button size="small" color="primary" onClick={() => dispatch(deleteMedia(media._id))}>
                    <DeleteIcon fontSize="small" />Delete</Button>
            </CardActions>
        </Card>
    )
}

export default Post;