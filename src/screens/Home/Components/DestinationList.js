import React, {
  useState, 
  useEffect
} from 'react';
import { 
  FlatList, 
  StyleSheet 
} from "react-native";
import * as axios from 'axios';
import config from "../../../config";
import DestinationsListItem from "./DestinationsListItem";

const DestinationsList = ({ navigation }) => {
    const [destinationsItems, setDestinationsItems] = useState([])

    var fetchData
    useEffect(() => {
      fetchData = async() => {
        const discoverListUrl = `${config.baseUrl}/destinations`
        let list = []
        try {
          list = await axios.get(discoverListUrl)
        } catch (error) {
          console.log("error", error.message, discoverListUrl)
        }
        setDestinationsItems(list.data)
      }
      fetchData()
      
    },[]);
  
  
    const renderItem = ( { item }) =>  {
      return [
        <DestinationsListItem
          key={item.id+''} 
          item={item}
          onPress={
            () => navigation.navigate("Details", { item })
          }
        />
      ]
    }
  
    return (
      <FlatList
        style={styles.container}
        horizontal={true}
        data={destinationsItems}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    )
  }

  const styles = StyleSheet.create({
    container: {
      paddingLeft:10
    }
  });

  export default DestinationsList