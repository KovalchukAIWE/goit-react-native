import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { globalColors } from '../../styles/Global';

import CreatePhotoIcon from '../../icons/CreatePhotoIcon';
import LocalIcon from '../../icons/LocalIcon';
import BtnDeleteIcon from '../../icons/BtnDeleteIcon';
import CameraScreen from './CameraScreen';

const CreatePostsScreen = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  return isCameraOpen ? (
    <CameraScreen onClose={() => setIsCameraOpen(false)} />
  ) : (
    <View style={styles.firstContainer}>
      <View style={styles.container}>
        <View style={styles.postsContainer}>
          <TouchableOpacity
            style={styles.addPhotoContainer}
            onPress={() => setIsCameraOpen(true)}>
            <CreatePhotoIcon />
          </TouchableOpacity>

          <Text style={styles.title}>Завантажте фото</Text>
        </View>
        <View style={styles.postsInputContainer}>
          <View style={styles.inputBlock}>
            <TextInput placeholder='Назва' />
          </View>
          <View style={styles.inputBlock}>
            <LocalIcon />
            <TextInput placeholder='Місцевість...' />
          </View>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Опубліковати</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.btnDelete}>
        <TouchableOpacity style={styles.btnDelete}>
          <BtnDeleteIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  firstContainer: {
    flex: 1,
    backgroundColor: globalColors.white,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    justifyContent: 'space-between',
    paddingBottom: 34,
    width: '100%',
  },
  container: {
    gap: 32,
    width: '100%',
  },
  addPhotoContainer: {
    width: '100%',
    height: 240,
    backgroundColor: globalColors.light,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: globalColors.gray,
  },
  postsContainer: {
    gap: 8,
    width: '100%',
  },
  title: {
    color: globalColors.darkGray,
    fontSize: 16,
    fontWeight: '400',
  },
  postsInputContainer: {
    gap: 16,
    width: '100%',
  },
  inputBlock: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: globalColors.gray,
    gap: 4,
  },
  btn: {
    width: 343,
    height: 51,
    backgroundColor: globalColors.gray,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: 120,
  },
  btnDelete: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  btnText: {
    color: globalColors.darkGray,
    fontSize: 16,
  },
});

export default CreatePostsScreen;
