import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import Posts from '../components/Posts';
import { globalColors } from '../../styles/Global';
import UserCard from '../components/UserCard';
import { useEffect } from 'react';

type Props = {
  navigation: any;
  route: any;
};

const Home: React.FC<Props> = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <UserCard
        imgUrl={require('../../assets/images/profilePhoto.png')}
        userName='Natali Romanova'
        userEmail='email@example.com'
      />
      <ScrollView style={styles.postsContainer}>
        <Posts
          idPost='1'
          imgUrl={require('../../assets/images/postPhoto.png')}
          title='Ліс'
          comments={3}
          country='Ivano-Frankivsk Region, Ukraine'
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalColors.white,
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    gap: 32,
    paddingTop: 32,
  },
  postsContainer: {
    gap: 32,
    width: '100%',
  },
});

export default Home;
