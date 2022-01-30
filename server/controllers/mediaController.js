import express from "express";
import mongoose from 'mongoose';

import AddMedia from "../models/mediaModels.js";

const router = express.Router();

export const findMedia = async (req,res) => {
    try {
        const addPost = await AddMedia.find();
        res.status(200).json(addPost);
    }
    catch (error) {
        res.status(404).json({message:error.message});
    }
} 
//201 mean sucessful creation
export const createMedia = async (req,res) => {
    const { user, title, caption, upload, hashtags} = req.body;
    const newMedia = new AddMedia({user, title, caption, upload, hashtags});
    try {
        await newMedia.save();
        res.status(201).json(newPost);
    }
    catch (error) {
        res.status(409).json({message: error.message});
    }
} 
export const updateMedia = async (req,res) => {
    const { id: _id } = req.params;
    const media = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Id is invalid')
    
    const updateMedia = await AddMedia.findByIdAndUpdate(_id, media, {new: true});
    res.json(updateMedia);
}
export const deleteMedia = async (req,res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Id is invalid')

    await AddMedia.findByIdAndRemove(id);

    res.json({message:'Post is deleted'});
}
export const likeMedia = async (req,res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Id is invalid')

    const likes = await AddMedia.findById(id);
    const updatedlikes = await AddMedia.findByIdAndUpdate(id, { numOfLikes: likes.numOfLikes  + 1}, {new: true})

    res.json(updatedlikes);
}