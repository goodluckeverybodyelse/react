"use strict"

import { applyMiddleware, createStore } from 'redux';
import  reducers from './reducers/index'; 
import { addToCart } from './actions/cartActions';
import { addAlbum, updateAlbum, deleteAlbum } from './actions/albumActions';
import logger from 'redux-logger'
import React from 'react'
import {render} from 'react-dom'

import {Provider} from 'react-redux'


import AlbumList from './components/pages/album-list';


const middleware = applyMiddleware(logger)

const store = createStore(reducers, middleware);

render (
    <Provider store={store}> 
        <AlbumList />
    </Provider>, document.getElementById('app')
);





// store.subscribe(() => {
//     console.log('the current state is', store.getState());
// })

store.dispatch(addAlbum()

// store.dispatch({type: 'UPDATE_ALBUM', payload: 
//     {id: 4, title: 'black sands', artist: 'bonobo' }
// })

store.dispatch(updateAlbum({id:1, title: 'whats up nigga', artist: 'coolyo'}))

store.dispatch(deleteAlbum({id:1}));

store.dispatch(addAlbum([{id: 8, title: 'space is only noise', artist: 'nicolas jaar'}, {id: 4, title: 'black sands', artist: 'bonobo'}]))
