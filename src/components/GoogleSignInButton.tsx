import React from 'react';
import { Button } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import { useNavigation } from '@react-navigation/native';

export const GoogleSignInButton: React.FC = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: 'YOUR_EXPO_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
    iosClientId: 'YOUR_IOS_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
    androidClientId: 'YOUR_ANDROID_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
    webClientId: 'YOUR_WEB_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
  });

  const navigation = useNavigation();

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      navigation.navigate('Dashboard', { user: { token: id_token } });
    }
  }, [response]);

  return <Button title="Sign in with Google" onPress={() => promptAsync()} />;
};
