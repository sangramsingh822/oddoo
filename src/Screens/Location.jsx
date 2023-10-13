import React, { useState, useEffect } from 'react';
import { View, Text, Button,PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { calculateDistance } from './helpers'; // You should implement the calculateDistance function

const branchLocations = [
  { name: 'Almondz Global Securities Ltd', lat: 28.5373459, lon: 77.2709836 },
  { name: 'Branch B', lat: 40.23456, lon: -74.67890 },
  // Add more branches as needed
];

export default function Location() {
  const [nearestBranch, setNearestBranch] = useState(null);
  const [isNearBranch, setIsNearBranch] = useState(false);

  useEffect(() => {
    // Request location permissions (only needed for Android)
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app requires access to your location.',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission granted.');
          startLocationUpdates();
        } else {
          console.log('Location permission denied.');
        }
      } catch (err) {
        console.warn(err);
      }
    };

    // Call the permission function when the component mounts
    requestLocationPermission();

    return () => {
      // Stop location updates when the component unmounts
      Geolocation.clearWatch(locationWatchId);
    };
  }, []);

  let locationWatchId = null;

  const startLocationUpdates = () => {
    locationWatchId = Geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        updateNearestBranch(latitude, longitude);
      },
      (error) => {
        console.warn(error.code, error.message);
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 10, // Minimum distance (in meters) to trigger an update
        interval: 60000,   // Minimum time (in milliseconds) between updates
      }
    );
  };

  const updateNearestBranch = (latitude, longitude) => {
    let nearestBranch = null;
    let nearestDistance = Infinity;

    for (const branch of branchLocations) {
      const distance = calculateDistance(latitude, longitude, branch.lat, branch.lon);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestBranch = branch;
      }
    }

    const isNearBranch = nearestDistance < 0.05; // Example: Enable if within 100 meters of the nearest branch

    setNearestBranch(nearestBranch);
    setIsNearBranch(isNearBranch);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nearest Branch: {nearestBranch ? nearestBranch.name : 'None'}</Text>
      <Button
        title="Check In"
        onPress={() => {
          if (isNearBranch) {
            // Perform check-in logic here
          } else {
           Alert('You are not in near office ')
          }
        }}
        disabled={!isNearBranch}
      />
    </View>
  );
}
