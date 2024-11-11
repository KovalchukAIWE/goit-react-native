import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  ImageSourcePropType,
} from 'react-native';
import { globalColors } from '../../styles/Global';
import React, { FC } from 'react';

type InputProps = {
  idPost: string;
  imgUrl: ImageSourcePropType;
  comment: string;
  date: string;
  time: string;
  author: boolean;
};
const Comment: FC<InputProps> = ({
  idPost,
  imgUrl,
  comment,
  date,
  time,
  author,
}) => {
  return (
    <View
      style={[
        styles.commentContainer,
        author && { flexDirection: 'row-reverse' },
      ]}>
      <Image
        source={imgUrl}
        style={styles.authorAvatar}
      />
      <View
        style={styles.textBlock}
        id={idPost}>
        <Text style={styles.text}>{comment}</Text>
        <View
          style={[
            styles.dateContainer,
            author && { flexDirection: 'row-reverse' },
          ]}>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.date}>{time}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  authorAvatar: {
    width: 28,
    height: 28,
    borderRadius: 50,
  },
  textBlock: {
    flex: 1,
    backgroundColor: globalColors.light,
    padding: 16,
    borderRadius: 6,
    gap: 8,
  },
  text: {
    color: globalColors.black,
    fontSize: 13,
    lineHeight: 16,
    fontWeight: '400',
  },
  dateContainer: {
    flexDirection: 'row',
    gap: 8,
    width: '100%',
    justifyContent: 'flex-end',
  },
  date: {
    color: globalColors.darkGray,
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '400',
  },
});

export default Comment;
