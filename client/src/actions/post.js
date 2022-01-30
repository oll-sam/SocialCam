import * as api from '../api';



// async(dispatch) is for redux thunk
export const getPosts = () => async(dispatch) => {
    try{
        const { data } = await api.fetchMedia();
        dispatch({ type: 'FETCH_ALL', payload: data });
    }
    catch(error){
        console.log(error);
    }
};

export const createMedia = (media) => async(dispatch) => {
try {
    const { data } = await api.createMedia(media);
    dispatch({type: 'CREATE', payload: data});
} 
catch (error) {
    console.log(error);
}
};

export const updateMedia = (id, media) => async(dispatch) => {
try {
    const { data } = await api.updateMedia(id, media);
    dispatch({ type: 'UPDATE', payload: data });
} 
catch (error) {
    console.log(error);
}
};

export const deleteMedia = (id) => async(dispatch) => {
try {
    await api.deleteMedia(id)
    dispatch({ type: 'DELETE', payload: id})
} catch (error) {
    console.log(error);
}
};
export const likeMedia = (id) => async(dispatch) => {
try {
    const { data } = await api.likeMedia(id)

    dispatch({ type: 'LIKE', payload: data});
} catch (error) {
    console.log(error);
}
};
