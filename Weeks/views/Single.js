import React from 'react';
import {StyleSheet, View, Text,Image} from 'react-native';


const apiUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

const Single = (props) => {
  const {navigation} = props;
  const image = navigation.getParam('item', {});
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{image.title}</Text>
      <Image
        style={styles.image}
        source={{uri: apiUrl + image.filename}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  image: {
    width: 300,
    height: 300,
    margin: 'auto',
  },
  title:{
    fontStyle: 'italic',
    paddingBottom:50,
    fontWeight: '500',
    fontSize: 20,
  }
});

export default Single;