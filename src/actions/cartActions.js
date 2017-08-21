"use strict"

export function addToCart(album) {
    return {type: 'ADD_TO_CART', payload: album}
}