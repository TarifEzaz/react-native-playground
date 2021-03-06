import { StatusBar } from 'expo-status-bar';
/*
expo-status-bar gives you a component and imperative 
interface to control the app status bar to change its 
text color, background color, hide it, make it 
translucent or opaque, and apply animations to any of 
these changes. Exactly what you are able to do with 
the StatusBar component depends on the platform you're 
using.
From the doc: https://docs.expo.io/versions/latest/sdk/status-bar/
*/
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text, 
  TextInput,
  TouchableOpacity, 
  View
} from 'react-native';
import DiscoverList from "./Components/DiscoverList";
import DestinationsList from "./Components/DestinationList";
import config from "../../config"

export default function App({ navigation }) {
    const [searchQuery, setSearchQuery] = useState("")

    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={{width:"90%"}}>
          <TouchableOpacity>
            <Image 
              style={styles.drawerIc} 
              source={require("../../../assets/drawerMenu.png")} 
            />
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <View style={{flexDirection:"row"}}>
            <Image 
              style={styles.headerIc} 
              source={require("../../../assets/profileImg.png")} 
            />
            <View style={styles.headerInfo}>
              <Text style={styles.headerWelcome}>
                Welcome
              </Text>
              <Text style={styles.headerProfile}>
                Shajia Annoor Joty
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Image 
              style={styles.headerIc} 
              source={require("../../../assets/bell.png")} 
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inputView}>
          <Image 
            style={{width:13, height: 13}} 
            source={require("../../../assets/search.png")} 
          />
          <TextInput 
            onChangeText = {(query) => setSearchQuery(query)}
            style={styles.input}
            placeholder = "Search Here"
            autoCorrect={false}
            underlineColorAndroid='transparent'
            showSoftInputOnFocus={false}
          />
        </View>
        <View style={{width:"90%"}}>
          <Text style={styles.discoverTxt}>
            Discover
          </Text>
        </View>
        <DiscoverList />
        <View style={styles.destinationsView}>
          <Text style={styles.destinationsTxt}>
            Popular Destinations
          </Text>
          <DestinationsList navigation={navigation} />
        </View>  
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: config.colors.primary,
      alignItems: 'center',
      paddingTop:40
    },
    drawerIc: {
      width: 35,
      height:35
    },
    headerIc:{
      width:50,
      height:50,
      marginRight:10
    },
    header:{
      flexDirection:"row",
      marginTop:10,
      justifyContent:"space-between",
      width:"90%",
      marginBottom:25
    },
    headerInfo:{
      justifyContent:"center",
    },
    headerWelcome:{
      color:"white",
      fontFamily:"Rubik_400Regular",    
    },
    headerProfile:{
      color:"white",
      fontFamily:"Rubik_700Bold",    
      fontSize: 16
    },
    inputView:{
      backgroundColor:"white",
      width:"90%",
      height:50,
      borderRadius:25,
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"row",
      marginBottom: 25
    },
    input: {
      width:"80%",
      height:45,
      marginLeft:10,
      fontSize:20,
    },
    discoverTxt: {
      fontFamily:"Rubik_700Bold",
      fontWeight:"bold",
      fontSize: 28,
      color:"white",
      marginBottom:20
    },
    destinationsView:{
      backgroundColor:"white",
      borderTopRightRadius: 50,
      borderTopLeftRadius: 50,
      width:"100%",
      flex:1,
      flexDirection: "column",
    },
    destinationsTxt:{
      fontFamily:"Rubik_500Medium",    
      fontSize: 18,
      color:"#B4ADC6",
      fontWeight:"bold",
      marginVertical:20,
      paddingLeft: 25
    }
  })