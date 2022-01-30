import mongoose from 'mongoose';

const schema = mongoose.Schema({
    user: String,
    title: String, 
    caption: String,
    hashtags: String,
    upload: String,
    numOfLikes: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

var AddMedia = mongoose.model('addPost', schema);

export default AddMedia