import React from 'react';
import  ReactDOM  from 'react-dom';
import { Button } from '@material-ui/core';

//provider- keep track of the global state of a store 
//which gives us access to the state anywhere
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import camera from './images/Camera.jpg';
import './index.css';
import video from './images/background-video.mp4'
import { Link } from '@material-ui/core';

import App from './App'

const store = createStore(reducers, compose(applyMiddleware(thunk)))
ReactDOM.render(
    <Provider store = {store}>
        <div className='header'>
            <div className='video-wrapper'>
                <div className='pg-hero-nav'>
                    <h1>S<img className='img-1' src={camera} alt="camera" />CIAL<br/> CAM.ERA</h1>
                    <Link className='login'>Login</Link>
                    <h4>Create memories for the world to see.</h4>
                </div> 
                <video autoPlay muted loop >
                    <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                </video>
            </div>
            <nav className='nav-bar'>
                <h2>S<img className='img-2' src={camera} alt="camera" />CIAL<br/> CAM.ERA</h2>
                <Link className='login2'>Post</Link>
            </nav>
        </div>
        <App/>
    </Provider>,
    
    document.getElementById('root')
);