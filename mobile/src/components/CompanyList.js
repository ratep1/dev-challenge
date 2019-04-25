import React, { memo } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  companyList: {
    flexDirection: 'row',
    padding: 20
  },
  imageWrapper: {
    marginRight: 20,
    borderRadius: 40,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,0.2)',
    width: 80,
    height: 80,
    overflow: 'hidden'
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain'
  },
  text: {
    flexDirection: 'column'
  },
  textName: {
    fontSize: 24
  },
});

let avatar = null;

export default memo(({ company }) => {
  const { color, image, name } = company;
  avatar = image;

  return (
    <View style={styles.companyList}>
      <View style={[styles.imageWrapper, { borderColor: color }]}>
        <Image style={styles.image} source={{ uri: avatar }} />
      </View>
      <View style={styles.text}>
        <Text style={styles.textName}>{ name }</Text>
      </View>
    </View>
  );
});
