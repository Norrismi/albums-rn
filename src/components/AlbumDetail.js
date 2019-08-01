import React from "react";
import { Text, View, Image, Linking } from "react-native";

import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

const AlbumDetail = props => {
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            source={{ uri: props.data.thumbnail_image }}
            style={styles.thumbnailStyle}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.headerTextStyle}>{props.data.title}</Text>
          <Text>{props.data.artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image source={{ uri: props.data.image }} style={styles.imageStyle} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(props.data.url)}>
            Buy Now
        </Button>
       
      </CardSection>
    </Card>
  );
};

const styles = {
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItmes: "center",
    marginRight: 10,
    marginLeft: 5
  },

  thumbnailStyle: {
    flexDirection: "row",
    height: 50,
    width: 50
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    height: 50
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
