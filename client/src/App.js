
import React, {useState, useEffect} from 'react';
import {getPosts} from './actions/post'
import {Container, Grow, Grid} from '@material-ui/core';
import MediaPosts from "./components/MediaPosts/MediaPosts";
import Form from "./components/Form/Form";
import styles from "./styles";
//import a hook for redux
import { useDispatch } from "react-redux";


const App = () => {
    const style = styles();
    const dispatch = useDispatch();
    const [id, setId] = useState(null);

    useEffect(() => {
        dispatch(getPosts());
    }, [id, dispatch]);

    return(
        //usng material UI
        //Typography is used to insert any textual element
        //xs devices will use the entire screen, while medium to small devices will use 7/12 of the screen
        <Container maxidth="md">
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={1}>
                        
                        <Grid item xs={12} sm={9}>
                            <MediaPosts setId={ setId } />
                        </Grid>

                        <Grid item xs={12} sm={3}>
                            <Form  id={ id } setId={ setId } />
                        </Grid>

                    </Grid>
                </Container>
            </Grow>

        </Container>
    )
}

export default App; 