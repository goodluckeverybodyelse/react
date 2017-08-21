"use strict"

export function deleteAlbum(id) {
    return {
        type: 'DELETE_ALBUM',
        payload: id
    }
}

export function addAlbum(album) {
    return {
        type: 'ADD_ALBUM',
        payload: album
    }
}

export function updateAlbum(album) {
    return {
        type: 'UPDATE_ALBUM',
        payload: album
    }
}

export function getAlbums() {
    return {
        type: 'GET_ALBUMS'
    }
}