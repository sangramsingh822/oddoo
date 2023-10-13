import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';
import {Icon} from 'react-native-elements';
import BackgroundImage from '../assets/hand.png'
const Checkin = () => {
  const [animations] = useState([
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
  ]);
  var [checkin, setcheckin] = useState(false);
  useEffect(() => {
    animateWaves();
  }, []);

  const animateWaves = () => {
    animations.forEach((animation, index) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animation, {
            toValue: 1,
            duration: 2000 + index * 500, // Adjust the duration for each wave
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(animation, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    });
  };

  const waveStyles = animations.map((animation, index) => ({
    transform: [
      {
        scale: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 2 + index * 0.5], // Adjust the scale factor for each wave
        }),
      },
    ],
  }));

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: checkin ? 'red' : 'green'}]}
        onPress={() => setcheckin(!checkin)}>
        {waveStyles.map((style, index) => (
          <Animated.View
            key={index}
            style={[
              styles.circle,
              style,
              {borderColor: checkin ? 'red' : 'green'},
            ]}
          />
        ))}
        <Image
           style={{ flex: 1, maxWidth: 70, maxHeight: 70 }}
           source={BackgroundImage}
           resizeMode="contain"
        />
        <Text style={styles.buttonText}>
          {checkin ? 'Check out' : 'Check In'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'relative',
    width: 150,
    height: 150,
    borderRadius: 100,
    // Button background color
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
  },
  circle: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 100,
    // Circle border color
    borderWidth: 8, // Border width
    opacity: 0.2, // Circle opacity
  },
  buttonText: {
    color: 'white', // Text color
    fontSize: 17,
    fontWeight:'bold'
  },
  inputIcon: {
    fontSize: 24,
    // paddingHorizontal: 8,
  },
});

export default Checkin;
