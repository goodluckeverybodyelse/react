export  const albumReducer = (state={albums:
    [{id: 1, title: 'hey', artist:'hello'}, {id: 3, title: 'north borders', artist: 'bonobo'}]
    }, action) => {
    switch(action.type) {
        case 'ADD_ALBUM':
            return {albums:[...state.albums, ...action.payload]};
            break;
        case 'DELETE_ALBUM':
            const albumToDelete = [...state.albums];
            const deleteIndex = albumToDelete.findIndex((album) => album.id === action.payload.id)
            return {albums: [...albumToDelete.slice(0, deleteIndex), ...albumToDelete.slice(deleteIndex + 1 )]}
            break;
        case 'UPDATE_ALBUM':
            const albumToUpdate = [...state.albums];
            const updateIndex = albumToUpdate.findIndex((album) => album.id === action.payload.id)
            const newAlbum = {
                ...albumToUpdate[updateIndex], title: action.payload.title, artist: action.payload.artist
            }
            // console.log('updated album looks like: ', newAlbum);
            return {albums: [...albumToUpdate.slice(0, updateIndex), newAlbum, ...albumToUpdate.slice(updateIndex + 1 )]}
        
        case 'GET_ALBUMS':
            return {...state, albums: [...state.albums]}
    }
    return state;
}