import { useEffect } from 'react';
import { View, Text, Image,ScrollView ,TouchableOpacity } from 'react-native';

const About = ({ navigation, route }) => {
  const data = route.params;
  useEffect(() => {

  }, [data]);


  return (
    <ScrollView  contentContainerStyle={{flexDirection:"row", flexWrap:"wrap",justifyContent:"space-between",padding:5 ,backgroundColor:"white"}} >

      <TouchableOpacity style={{ marginRight: 6,marginBottom:20}} onPress={() => navigation.navigate("hotel_name",{name:"Presoton Hotel"})}>
        <View style={{ position: "relative" }}>
          <Text style={{ fontSize: 13, fontWeight: "400", position: "absolute", zIndex: 1, top: 15, left: 15, borderRadius: 20, paddingHorizontal: 8, paddingVertical: 4, backgroundColor: "rgba(0, 0, 0, 0.40)", color: "#FFFFFF" }}>20% Off</Text>
          <Image style={{ fontSize: 13, fontWeight: "400", position: "absolute", zIndex: 1, top: 15, right: 15, borderRadius: 30, padding: 10, width: 16, height: 16, backgroundColor: "rgba(0, 0, 0, 0.40)" }} source={require("../assets/heart.png")} />
          <Image source={require("../assets/r1.png")} style={{ marginBottom: 10}} />
        </View>
        <Text style={{ color: '#000', fontSize: 18, fontWeight: "600", fontStyle: "normal", marginVertical: 3 }}>presoton Hotel</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image style={{ width: 10, marginRight: 5, borderRadius:20,resizeMode: "contain" }} source={data.locationlogo} />
          <Text style={{ color: "#767676", fontSize: 12 }}>Dhaka ,Bangladesh</Text>
        </View>
        <Text style={{ color: '#000', fontSize: 15, fontStyle: "normal", fontWeight: "600" }}>$200.00</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate("hotel_name",{name:"Presoton Hotel"})} style={{ marginRight: 10,marginBottom:20}}>
        <View style={{ position: "relative" }}>
          <Text style={{ fontSize: 13, fontWeight: "400", position: "absolute", zIndex: 1, top: 15, left: 15, borderRadius: 20, paddingHorizontal: 8, paddingVertical: 4, backgroundColor: "rgba(0, 0, 0, 0.40)", color: "#FFFFFF" }}>20% Off</Text>
          <Image style={{ fontSize: 13, fontWeight: "400", position: "absolute", zIndex: 1, top: 15, right: 15, borderRadius: 30, padding: 10, width: 16, height: 16, backgroundColor: "rgba(0, 0, 0, 0.40)" }} source={require("../assets/heart.png")} />
          <Image source={require("../assets/r1.png")} style={{ marginBottom: 10}} />
        </View>
        <Text style={{ color: '#000', fontSize: 18, fontWeight: "600", fontStyle: "normal", marginVertical: 3 }}>presoton Hotel</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image style={{ width: 10, marginRight: 5, borderRadius:20,resizeMode: "contain" }} source={data.locationlogo} />
          <Text style={{ color: "#767676", fontSize: 12 }}>Dhaka ,Bangladesh</Text>
        </View>
        <Text style={{ color: '#000', fontSize: 15, fontStyle: "normal", fontWeight: "600" }}>$200.00</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("hotel_name",{name:"Presoton Hotel"})} style={{ marginRight: 10,marginBottom:20}}>
        <View style={{ position: "relative" }}>
          <Text style={{ fontSize: 13, fontWeight: "400", position: "absolute", zIndex: 1, top: 15, left: 15, borderRadius: 20, paddingHorizontal: 8, paddingVertical: 4, backgroundColor: "rgba(0, 0, 0, 0.40)", color: "#FFFFFF" }}>20% Off</Text>
          <Image style={{ fontSize: 13, fontWeight: "400", position: "absolute", zIndex: 1, top: 15, right: 15, borderRadius: 30, padding: 10, width: 16, height: 16, backgroundColor: "rgba(0, 0, 0, 0.40)" }} source={require("../assets/heart.png")} />
          <Image source={require("../assets/r1.png")} style={{ marginBottom: 10}} />
        </View>
        <Text style={{ color: '#000', fontSize: 18, fontWeight: "600", fontStyle: "normal", marginVertical: 3 }}>presoton Hotel</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image style={{ width: 10, marginRight: 5, borderRadius:20,resizeMode: "contain" }} source={data.locationlogo} />
          <Text style={{ color: "#767676", fontSize: 12 }}>Dhaka ,Bangladesh</Text>
        </View>
        <Text style={{ color: '#000', fontSize: 15, fontStyle: "normal", fontWeight: "600" }}>$200.00</Text>
      </TouchableOpacity>
      

      <TouchableOpacity onPress={() => navigation.navigate("hotel_name",{name:"Presoton Hotel"})} style={{ marginRight: 10,marginBottom:20}}>
        <View style={{ position: "relative" }}>
          <Text style={{ fontSize: 13, fontWeight: "400", position: "absolute", zIndex: 1, top: 15, left: 15, borderRadius: 20, paddingHorizontal: 8, paddingVertical: 4, backgroundColor: "rgba(0, 0, 0, 0.40)", color: "#FFFFFF" }}>20% Off</Text>
          <Image style={{ fontSize: 13, fontWeight: "400", position: "absolute", zIndex: 1, top: 15, right: 15, borderRadius: 30, padding: 10, width: 16, height: 16, backgroundColor: "rgba(0, 0, 0, 0.40)" }} source={require("../assets/heart.png")} />
          <Image source={require("../assets/r1.png")} style={{ marginBottom: 10}} />
        </View>
        <Text style={{ color: '#000', fontSize: 18, fontWeight: "600", fontStyle: "normal", marginVertical: 3 }}>presoton Hotel</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image style={{ width: 10, marginRight: 5, borderRadius:20,resizeMode: "contain" }} source={data.locationlogo} />
          <Text style={{ color: "#767676", fontSize: 12 }}>Dhaka ,Bangladesh</Text>
        </View>
        <Text style={{ color: '#000', fontSize: 15, fontStyle: "normal", fontWeight: "600" }}>$200.00</Text>
      </TouchableOpacity>
      

      <TouchableOpacity onPress={() => navigation.navigate("hotel_name",{name:"Presoton Hotel"})} style={{ marginRight: 10,marginBottom:20}}>
        <View style={{ position: "relative" }}>
          <Text style={{ fontSize: 13, fontWeight: "400", position: "absolute", zIndex: 1, top: 15, left: 15, borderRadius: 20, paddingHorizontal: 8, paddingVertical: 4, backgroundColor: "rgba(0, 0, 0, 0.40)", color: "#FFFFFF" }}>20% Off</Text>
          <Image style={{ fontSize: 13, fontWeight: "400", position: "absolute", zIndex: 1, top: 15, right: 15, borderRadius: 30, padding: 10, width: 16, height: 16, backgroundColor: "rgba(0, 0, 0, 0.40)" }} source={require("../assets/heart.png")} />
          <Image source={require("../assets/r1.png")} style={{ marginBottom: 10}} />
        </View>
        <Text style={{ color: '#000', fontSize: 18, fontWeight: "600", fontStyle: "normal", marginVertical: 3 }}>presoton Hotel</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image style={{ width: 10, marginRight: 5, borderRadius:20,resizeMode: "contain" }} source={data.locationlogo} />
          <Text style={{ color: "#767676", fontSize: 12 }}>Dhaka ,Bangladesh</Text>
        </View>
        <Text style={{ color: '#000', fontSize: 15, fontStyle: "normal", fontWeight: "600" }}>$200.00</Text>
      </TouchableOpacity>
      

      <TouchableOpacity onPress={() => navigation.navigate("hotel_name",{name:"Presoton Hotel"})} style={{ marginRight: 10,marginBottom:20}}>
        <View style={{ position: "relative" }}>
          <Text style={{ fontSize: 13, fontWeight: "400", position: "absolute", zIndex: 1, top: 15, left: 15, borderRadius: 20, paddingHorizontal: 8, paddingVertical: 4, backgroundColor: "rgba(0, 0, 0, 0.40)", color: "#FFFFFF" }}>20% Off</Text>
          <Image style={{ fontSize: 13, fontWeight: "400", position: "absolute", zIndex: 1, top: 15, right: 15, borderRadius: 30, padding: 10, width: 16, height: 16, backgroundColor: "rgba(0, 0, 0, 0.40)" }} source={require("../assets/heart.png")} />
          <Image source={require("../assets/r1.png")} style={{ marginBottom: 10}} />
        </View>
        <Text style={{ color: '#000', fontSize: 18, fontWeight: "600", fontStyle: "normal", marginVertical: 3 }}>presoton Hotel</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image style={{ width: 10, marginRight: 5, borderRadius:20,resizeMode: "contain" }} source={data.locationlogo} />
          <Text style={{ color: "#767676", fontSize: 12 }}>Dhaka ,Bangladesh</Text>
        </View>
        <Text style={{ color: '#000', fontSize: 15, fontStyle: "normal", fontWeight: "600" }}>$200.00</Text>
      </TouchableOpacity>
      

    </ScrollView>
  )
}

export default About