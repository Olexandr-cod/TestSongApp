import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DASHBOARD_ROUTES } from '../routes';
import CustomHeader from '../../components/navigator/CustomHeader';

// Stack
import AlbumArtistScreen from '../../screens/AlbumArtistScreen';
import ArtistBioScreen from '../../screens/ArtistBioScreen';

const Stack = createStackNavigator();

const StackNavigatorContainer = () => {

  return (
    <Stack.Navigator initialRouteName={DASHBOARD_ROUTES.TOP_ALBUMS_ARTIST_SCREEN}>
      <Stack.Screen
        name={DASHBOARD_ROUTES.TOP_ALBUMS_ARTIST_SCREEN}
        component={AlbumArtistScreen}
        options={{
          header: () => <CustomHeader title="Albums" />,
        }}
      />
      <Stack.Screen
        name={DASHBOARD_ROUTES.ARTIST_BIO_SCREEN}
        component={ArtistBioScreen}
        options={{
          header: () => <CustomHeader title="About Artist" showBackBtn={true} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigatorContainer;
