import { StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native'

import React from 'react'
import { Video, AVPlaybackStatus } from 'expo-av';
import pearColors from '../../config/pearColors';
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const VideoPlayer = ({ url, onPress, vidurl }) => {
  return (
    <View style={styles.containerV}>
      <TouchableOpacity style={{ width: "100%", height: "33%" }} onPress={onPress}></TouchableOpacity>
      <Video
        style={styles.video}
        source={{
          uri: url,
        }}
        // source={vidurl}
        useNativeControls
        resizeMode="contain"
        isLooping
      />
      <TouchableOpacity style={{ width: "100%", height: "33%" }} onPress={onPress}></TouchableOpacity>

    </View>

  )
}

export default VideoPlayer

const styles = StyleSheet.create({
  containerV: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,

    zIndex: 100,
    width: windowWidth,
    height: windowHeight / 1.2,
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)'


  },
  video: {
    alignSelf: 'center',
    width: windowWidth / 1.2,
    height: 200,
  },
})