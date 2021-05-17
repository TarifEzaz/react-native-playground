import React, {useState} from 'react';
import { 
  Image,
  ImageBackground,
  StyleSheet, 
  Text, 
  TouchableOpacity,
  View
} from 'react-native';
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
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
        >
          <Image 
            style={styles.drawerIc} 
            source={require("../../../assets/arrowBack.png")} 
          />
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
          <Text style={styles.reviewsTxt}>
            {`${item.reviews} Reviews`}
          </Text>
        </View>
        <Text style={styles.label}>Details</Text>
        <View style={styles.descriptionView}>
          <Text 
            numberOfLines={readMore ? 0 : 4}
            style={styles.descriptionTxt}
          >
            {item.description}
          </Text>
          <TouchableOpacity 
            onPress={() => setReadMore(!readMore)}
          >
            <Text style={styles.readMoreTxt}>Read More</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.label}>Amenities</Text>
        <View style={styles.descriptionView}>
          <AmenitiesList amenities={item.amenities}/>
        </View>   
      </ScrollView>
      <BookingArea />
      <AmenitiesList />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    height:"100%",
    paddingTop:40,
  },
  leftSpace: {
    marginBottom: 15,
    paddingLeft: 20
  },
  backIc: {
    width: 35,
    height:35
  },
  title: {
    fontSize:36,
    fontWeight:"bold",
    color:"white",
    textAlign:"left",
    fontFamily:"Rubik_700Bold",
    marginBottom:10,
    lineHeight:49
  },
  location: {
    color:"#B4ADC6",
    fontFamily: "Rubik_400Regular",
    textAlign:"left",
    fontSize:16,
    paddingHorizontal: 10
  },
  detailsView: {
    backgroundColor:"white",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    width:"100%",
    flex:1,
    paddingLeft:25,
    marginTop: 20,
    paddingTop: 10
  },
  label: {
    fontFamily:"Rubik_500Medium",    
    fontSize: 16,
    color:"#B4ADC6",
    fontWeight:"bold",
    paddingLeft: 25,
    paddingVertical:10
  },
  reviewView: {
    flexDirection: "row",
    alignItems:"center",
    paddingLeft: 25,
    marginBottom:20,
    height: 20
  },
  descriptionView: {
    paddingLeft: 25,
    marginBottom:20,
  },
  reviewsTxt: {
    color:"#B4ADC6",
    fontFamily: "Rubik_400Regular",
    textAlign:"left",
    fontSize:14,
    paddingLeft: 10
  },
  descriptionTxt:{
    color: "#4E4466",
    fontFamily: "Rubik_400Regular",
    textAlign:"left",
    fontSize:14,
    textAlign: "left",
    paddingRight:20,
    lineHeight: 25,
    marginBottom: 10
  },
  readMoreTxt: {
    color: config.colors.accent,
  },
})