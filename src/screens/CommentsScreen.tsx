import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import { globalColors } from '../../styles/Global';
import React from 'react';

import Comment from '../components/Comment';

const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.CommentsContainer}>
        <Image
          source={require('../assets/images/postPhoto.png')}
          style={styles.image}
        />
        <View style={styles.chatContainer}>
          <Comment
            idPost='1'
            author={false}
            imgUrl={require('../assets/images/commentImg.png')}
            comment='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud.'
            date='10.02.2023'
            time='12:00'
          />
          <Comment
            idPost='2'
            author={true}
            imgUrl={require('../assets/images/commentImgAuthor.png')}
            comment='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud.'
            date='10.02.2023'
            time='12:00'
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalColors.white,
    paddingLeft: 16,
    paddingRight: 16,
  },
  CommentsContainer: {
    paddingTop: 32,
  },
  chatContainer: {
    gap: 24,
    width: '100%',
  },
  image: {
    width: '100%',
    borderRadius: 8,
    marginBottom: 32,
  },
});

export default CommentsScreen;
