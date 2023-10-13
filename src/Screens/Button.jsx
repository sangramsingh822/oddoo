import React, { useState } from 'react';
import { Button } from 'react-native';

const CheckInButton = ({ isEnabled, onPress }) => {
  return (
    <Button
      title="Check-In"
      onPress={onPress}
      disabled={!isEnabled}
    />
  );
};

export default CheckInButton;
