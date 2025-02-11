import React from 'react';
import { Platform } from 'react-native';
import * as AppleAuthentication from 'expo-apple-authentication';
import { useNavigation } from '@react-navigation/native';

export const AppleSignInButton: React.FC = () => {
  const navigation = useNavigation();

  const handleAppleSignIn = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      navigation.navigate('Dashboard', {
        user: {
          name: credential.fullName,
          email: credential.email,
          userId: credential.user,
        },
      });
    } catch (error) {
      console.error('Apple Sign-In error:', error);
    }
  };

  return Platform.OS === 'ios' ? (
    <AppleAuthentication.AppleAuthenticationButton
      buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
      buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
      cornerRadius={5}
      style={{ width: 200, height: 44 }}
      onPress={handleAppleSignIn}
    />
  ) : null;
};
