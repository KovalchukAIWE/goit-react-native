import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';

import React, { FC } from 'react';
import { globalColors } from '../../styles/Global';

type Props = {
  imgUrl: ImageSourcePropType;
  userName: string;
  userEmail: string;
};

const UserCard: FC<Props> = ({ imgUrl, userName, userEmail }) => {
  return (
    <View style={styles.container}>
      <Image
        source={imgUrl}
        style={styles.avatar}
      />
      <View style={styles.textBlock}>
        <Text style={styles.userNameText}>{userName}</Text>
        <Text style={styles.text}>{userEmail}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 16,
  },
  textBlock: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  userNameText: {
    color: globalColors.black,
    fontSize: 13,
    fontWeight: 'bold',
  },
  text: {
    color: globalColors.black,
    fontSize: 11,
  },
});

export default UserCard;
