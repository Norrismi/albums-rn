import React, { Component } from "react";
import { Text, View } from "react-native";
import axios from "axios";

class AlbumList extends Component {
  state = {
    albums: []
  };

  componentWillMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(res => this.setState({albums: res.data}));
  }

  renderAlbums(){
    return this.state.albums.map(a => <Text key={a.title}>{a.title }</Text>)
  }


  render() {
    console.log(this.state)
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
