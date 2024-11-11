import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import GOOGLE_PLACES_API_KEY from '@env';
import { StyleSheet } from 'react-native';
import { globalColors } from '../../styles/Global';

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      styles={styles.inputBlock}
      placeholder='Місцевість...'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: GOOGLE_PLACES_API_KEY,
        language: 'en',
      }}
    />
  );
};

const styles = StyleSheet.create({
  inputBlock: {
    width: '100%',
    height: 50,
    backgroundColor: globalColors.light,
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: globalColors.gray,
    justifyContent: 'space-between',
  },
});

export default GooglePlacesInput;
