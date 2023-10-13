import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Checkin from './Checkin';
import { Icon } from 'react-native-elements';
const Home = () => {
  return (
    <View style={styles.container}>
      {/* Profile Icon */}
      <View style={styles.profileIcon}>
        {/* You can use an image or custom icon component here */}
        <Text style={styles.iconText}>Profile</Text>
      </View>

      {/* User Details */}
      <View style={styles.userDetails}>
        <Text style={styles.userName}>User Name</Text>
        <Text style={styles.email}>Email@example.com</Text>
        {/* Add more user details here */}
      </View>
      <Checkin />

      <View style={styles.bottomRow}>
        <View style={styles.infoBox}>
        <Icon
            style={styles.inputIcon}
            name="alarm"
            type="ionicons"
            color="#00cc0a"
          />
          <Text style={styles.infoLabel}>Check-in</Text>
          <Text>10:00 AM</Text>
        </View>

        <View style={styles.infoBox}>
        <Icon
            style={styles.inputIcon}
            name="alarm"
            type="ionicons"
            color="#00cc0a"
          />
          <Text style={styles.infoLabel}>Checkout</Text>
          <Text>05:00 PM</Text>
        </View>

        <View style={styles.infoBox}>
        <Icon
            style={styles.inputIcon}
            name="timer"
            type="ionicons"
            color="#00cc0a"
          />
          <Text style={styles.infoLabel}>Duration</Text>
          <Text>7 hours</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 50,
  },
  iconText: {
    color: 'black',
    fontWeight: 'bold',
  },
  userDetails: {
    alignItems: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: 'gray',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  infoBox: {
    flex: 1,
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default Home;
