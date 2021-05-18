import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity, 
} from 'react-native';
import config from '../../../config';

const DiscoverListItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Image 
        source={{uri: `${config.baseUrl}/${item.ic}`}}
        style={styles.image}
        />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    width:130,
    height: 105,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent:"center",
    alignItems:"center",
    marginRight:20
  },
  image: {
    width:42,
    height:42
  }
});

export default DiscoverListItem