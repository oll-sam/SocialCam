import React from 'react';
import styles from "./styles";
import Post from "./Post/Post";
//circular progress gives the loading sign
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

const MediaPosts = ({ setId }) => {
    const contents = useSelector((state) => state.posts);
    const style = styles();

    return(
        !contents.length ? <CircularProgress /> : (
            <Grid className={styles.container} container alignItems="stretch" spacing={3}>
                {
                    contents.map((media) => (
                        <Grid key= {media._id} item xs={12} sm={9}>
                            <Post media={ media } setId={ setId } />
                        </Grid>
                    ))
                }
            </Grid>
        )
    )
}

export default MediaPosts;