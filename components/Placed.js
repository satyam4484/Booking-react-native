
import {View,Text,Image} from "react-native";

const Placed = () => {
  return (
    <View style={{backgroundColor:"#448178",flex:1,paddingTop:10,paddingHorizontal:20,alignItems:"center",justifyContent:"center"}}>
        <Image source={require("../assets/done.png")} />
        <Text style={{color:"white",fontSize:22,fontWeight:"700",marginVertical:10}}>Booking Confirmed</Text>
        <Text style={{color:"white",fontSize:16,fontWeight:"400",textAlign:"center"}}>our order was placed successfully for more details check delivery status.</Text>
    </View>
  )
}

export default Placed