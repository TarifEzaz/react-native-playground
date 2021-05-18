import React from 'react';
import {  
    Text, 
    TouchableOpacity, 
    StyleSheet,
    View 
} from "react-native";
import config from "../../../config";

 const BookingArea = ({item}) => {
  return (
    <View style={styles.bookingContainer}>
      <View style={styles.bookingView}>
        <Text style={styles.priceTxt}>
          {`$${item.price}/night`}
        </Text>
        <TouchableOpacity style={styles.bookingBtn}>
          <Text style={styles.bookingBtnTxt}>
            Request To Book
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    bookingContainer:{
      backgroundColor:"white",
      width:"100%",
      height:100,
    },
    bookingView: {
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"row",
      height:100,
      backgroundColor:"white",
      borderTopRightRadius: 50,
      borderTopLeftRadius: 50,
      shadowColor: "#4E4466",
      shadowOffset: {
        width: 0,
        height: -5,
      },
      shadowOpacity: .1,
      shadowRadius: 20,
      elevation: 8,
    },
    priceTxt: {
      color:"#8F87A5",
      fontFamily: "Rubik_400Regular",
      fontSize:17,
    },
    bookingBtn: {
      backgroundColor:config.colors.accent,
      borderRadius: 30,
      padding: 15,
      marginLeft: 10
    },
    bookingBtnTxt:{
      color: "white",
      fontFamily:"Rubik_500Medium",    
      fontSize: 14,
    }
  })

  export default BookingArea;