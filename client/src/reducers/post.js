//reducer is a function that accepts the state and action
// state always has to equal to something
const reducer = (posts = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
            default:
                return posts;
        case 'UPDATE':
            return posts.map((media) => media._id === action.payload._id ? action.payload : media);
        case 'LIKE':
            return posts.map((media) => media._id === action.payload._id ? action.payload : media);
        case 'DELETE':
            return posts.filter((post) => post._id !== action.payload);
    };
};
export default reducer