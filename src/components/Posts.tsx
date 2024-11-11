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

import CommentsIcon from '../../icons/CommentsIcon';
import LikeIcon from '../../icons/likeIcon';
import LocalIcon from '../../icons/LocalIcon';

type InputProps = {
  idPost: string;
  imgUrl: ImageSourcePropType;
  title: string;
  likes?: number;
  comments: number;
  country: string;
};

const Posts: FC<InputProps> = ({
  idPost,
  imgUrl,
  title,
  likes,
  comments,
  country,
}) => {
  return (
    <View
      style={styles.postContainer}
      id={idPost}>
      <Image
        source={imgUrl}
        style={styles.image}
      />
      <View style={styles.ContextContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.innerContainer}>
          <View style={styles.reactionContainer}>
            <TouchableOpacity style={styles.reactionBlock}>
              <CommentsIcon></CommentsIcon>
              <Text>{comments}</Text>
            </TouchableOpacity>

            {likes !== undefined && (
              <TouchableOpacity style={styles.reactionBlock}>
                <LikeIcon />
                <Text>{likes}</Text>
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity style={styles.reactionBlock}>
            <LocalIcon></LocalIcon>
            <Text style={styles.countryText}>{country}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    gap: 16,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    borderRadius: 8,
  },
  title: {
    color: globalColors.black,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
  },
  innerContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  reactionContainer: { flexDirection: 'row', gap: 24 },
  reactionBlock: { flexDirection: 'row', gap: 3, alignItems: 'center' },

  countryText: {
    color: globalColors.black,
    fontWeight: '400',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  ContextContainer: {
    width: '100%',
    gap: 8,
  },
});

export default Posts;
