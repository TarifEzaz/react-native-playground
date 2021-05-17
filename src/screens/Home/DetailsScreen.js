import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import config from "../../config"
import Rating from "../Components/Rating"
import AmenitiesList from "./Components/AmenitiesList"
export default function App({ navigation, route}) {
  const { item } = route.params
  const [readMore, setReadMore] = useState(false)
  return (
    <ImageBackground 
      source={{uri: `${config.baseUrl}/${item.photo}`}}
      style={styles.container}
      resizeMode='cover'
    >
      <View  style={styles.leftSpace}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Image style={styles.drawerIc} source={require("../../../assets/arrowBack.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.leftSpace}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.location}>{item.location}</Text>
      </View>
      <ScrollView style={styles.detailsView}>
        <Text style={styles.label}>Customers Rating</Text>
        <View style={styles.reviewView}>
          <Rating rating={item.rating} />
          <Text style={styles.reviewsTxt}>{`${item.reviews} Reviews`}</Text>
        </View>
        <Text style={styles.label}>Details</Text>
        <View style={styles.descriptionView}>
          <Text 
            numberOfLines={readMore ? 0 : 4}
            style={styles.descriptionTxt}
            >
            {item.description}
          </Text>
          <TouchableOpacity onPress={() => setReadMore(!readMore)}>
            <Text style={styles.readMoreTxt}>Read More</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.label}>Amenities</Text>
        <View style={styles.descriptionView}>
          <AmenitiesList amenities={item.amenities}/>
        </View>
        
      </ScrollView>
      <View style={styles.bookingContainer}>
        <View style={styles.bookingView}>
          <Text style={styles.priceTxt}>{`$${item.price}/night`}</Text>
          <TouchableOpacity style={styles.bookingBtn}>
            <Text style={styles.bookingBtnTxt}>Request To Book</Text>
          </TouchableOpacity>
        </View>
        </View>
    </ImageBackground>
  );
}