"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAlbums} from '../../actions/albumActions'



class AlbumList extends React.Component {
    componentDidMount() {
        this.props.getAlbums();
    }
    render() {
        const albumlijst = this.props.albums.map((album) => {
            return <div key={album.id}>{album.title} | {album.artist}</div>
        })
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getAlbums: getAlbums}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);