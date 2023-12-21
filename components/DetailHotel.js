import { View, Text, Image, StyleSheet, Button ,TouchableOpacity,ScrollView} from "react-native"
import MapView from 'react-native-maps';

const DetailHotel = ({navigation}) => {
    return (
        <ScrollView>
            <View style={{ width: "100%" ,height:200}}>
                <Image style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20, width: "100%" ,height:200}} source={require("../assets/Resort.png")} />
            </View>

            <View style={{ paddingHorizontal: 20 }}>

                <View style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={{ fontSize: 25, fontWeight: "700", fontStyle: "normal" }}>Panshi Hotel in Sylhet</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 16, fontWeight: "400", marginRight: 5 }}>⭐</Text>
                        <Text style={{ fontSize: 16, fontWeight: "400" }}>4.0</Text>
                    </View>
                </View>

                <View className="flex-row mt-1 items-center">
                    <Image className="w-[20] h-[20] mr-1" source={require("../assets/location.png")} />
                    <Text className="text-[18] text-[#696969] font-normal">Bangladesh</Text>
                </View>

                <View style={{ marginTop: 10, alignItems: "center", justifyContent:"center",width: "100%", height: 100, backgroundColor: "grey", borderRadius: 10, borderWidth: 2, padding: 3 }}>
                    <Text style={{ textAlign: 'center', alignSelf: 'center',fontSize:20 }}>Show on Map</Text>
                </View>

                <View style={{ marginTop: 10, borderRadius: 20, flexDirection: "row", backgroundColor: "grey", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10, paddingVertical: 5 }}>

                    <Text style={{ fontSize: 16, fontWeight: "600", color: "#448178", borderRadius: 16, padding: 8, backgroundColor: "white" }}>Details</Text>
                    <Text style={{ fontSize: 16, fontWeight: "400" }}>Trip plan</Text>
                    <Text style={{ fontSize: 16, fontWeight: "400" }}>Review</Text>
                </View>

                <Text style={{fontSize:16,fontWeight:"400", lineHeight:24,textAlign:"justify"}}>
                    It is a long established fact that a reader will be distracted by the readable content of a page 
                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.

                </Text>
                <Text style={{fontSize:16,fontWeight:"400", lineHeight:24,textAlign:"justify"}}>
                    The letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search
                </Text>

                <View style={{flexDirection:"row" ,justifyContent:"space-evenly",alignItems:"center",marginTop:2,marginBottom:10}}>
                    <Text style={{fontSize:22,fontWeight:"700"}}>$200.00</Text>

                    <TouchableOpacity onPress={() => navigation.navigate("checkout")} style={{backgroundColor:"#448178" ,paddingVertical:10,paddingHorizontal:20,borderRadius:10}} >
                        <Text style={{color:"white",fontSize:15,fontWeight:"600"}}>Book Now</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}


export default DetailHotel