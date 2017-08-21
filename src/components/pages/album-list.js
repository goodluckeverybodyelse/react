"use strict"

import React from 'react';
import {connect} from 'react-redux';



class AlbumList extends React.Component {
    render() {
        const albumlijst = this.props.albums.map((album) => {
            return <div key={album.id}>{album.title} | {album.artist}</div>
        })
        console.log('are we accessing the state?', this.props.albums);
        
        return(
            <div>
                {albumlijst}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        albums: state.albums.albums
    }
}


export default connect(mapStateToProps)(AlbumList);