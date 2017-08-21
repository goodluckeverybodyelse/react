"use strict"
import { combineReducers } from 'redux';

import { albumReducer } from './albumReducers';
import { cartReducer } from './cartReducers';

export default combineReducers({
    albums: albumReducer,
    cart: cartReducer
})