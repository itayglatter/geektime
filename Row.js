import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
   //flexDirection: 'row',
    //alignItems: 'center',
    direction: 'rtl'
    
  },
  text: {
    marginLeft: 0,
    fontSize: 12,
    direction: 'rtl'
    
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
    direction: 'rtl'
  },
});

const Row = (props) => (
  <View style={styles.container}>
  <Image source={{ uri: 'https://lh3.googleusercontent.com/MPtAjrcHrWZMfOjXV-cSCfHlhb2FsWneZIVJRuYRbkczAyrYxW2mO-VbDwZBGZoXGg=w300'}} style={styles.photo} />
    <Text style={styles.text}>
      {`${props.title.rendered}`}
    </Text>
    
  </View>
);

export default Row;