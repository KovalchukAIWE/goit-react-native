import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import * as Location from 'expo-location';

type LocationType = {
  coords: {
    latitude: number;
    longitude: number;
  };
};

const MapScreen: React.FC = () => {
  const [location, setLocation] = useState<LocationType | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const getLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location as LocationType);
  };

  useEffect(() => {
    getLocationPermission();
  }, []);

  const initialRegion: Region = {
    latitude: location?.coords?.latitude || 37.78825,
    longitude: location?.coords?.longitude || -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      {errorMsg ? (
        <Text style={styles.errorText}>{errorMsg}</Text>
      ) : (
        <MapView
          style={styles.mapStyle}
          region={initialRegion}
          mapType='standard'
          onMapReady={() => console.log('Map is ready')}
          onRegionChange={() => console.log('Region change')}>
          {location && (
            <Marker
              title='I am here'
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              description='Hello'
            />
          )}
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});

export default MapScreen;
