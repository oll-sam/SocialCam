import React, {useState, useEffect} from 'react';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
import styles from "./styles";
import {useDispatch} from 'react-redux';
import { createMedia, updateMedia } from '../../actions/post';
import { useSelector } from 'react-redux';



const Form = ({ id, setId}) => {
    const[data, setData] = useState({user:'', title:'', caption:'', hashtags:'', upload:'' });
    
    const content = useSelector((state) => (id ? state.posts.find((m) => m._id === id) : null));
    const style = styles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(content) setData(content);
    }, [content]);

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(id) {
            dispatch(updateMedia(id, data));
        } else {
            dispatch(createMedia(data));
        }
        
        clear();
    }
    const clear = () =>{
            setId(null);
            setData({user:'', title:'', caption:'', hashtags:'', upload:'' });
    }

    return(
        <Paper className={style.paper}>
            <form novalidation="true" className= {`${style.root} ${style.form}`} autoComplete="off" onSubmit={handleSubmit}>
                <Typography variant="h5">{id ? 'Edit Your Post' : 'Showcase Your Photos' }</Typography>
                <TextField  name="user" variant="outlined" label="User" fullWidth value={data.user} onChange={(e => setData({...data, user: e.target.value}))} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={data.title} onChange={(e => setData({...data, title: e.target.value}))} />
                <TextField name="caption" variant="outlined" label="Caption" fullWidth value={data.caption} onChange={(e => setData({...data, caption: e.target.value}))} />
                <TextField name="hashtags" variant="outlined" label="Hashtags" fullWidth value={data.hashtags} onChange={(e => setData({...data, hashtags: e.target.value.split(',')}))} />
                <div className={style.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({base64}) => setData({...data, upload: base64})} />
                    <Button className={style.buttonSubmit} variant="contained" color="primary" size='large' type="submit" fullWidth>Submit</Button>
                    <Button variant="contained" color="secondary" size='small' onClick={clear} fullWidth>Clear</Button>
                </div>
            </form>
        </Paper>
    );
}

export default Form;