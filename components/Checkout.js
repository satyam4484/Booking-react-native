
import { View, Text, Image, TextInput, Button, TouchableOpacity } from "react-native"
const Checkout = ({navigation}) => {
    const date = new Date();
    return (
        <View style={{ paddingHorizontal: 20 }}>
            <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 10 }}>
                <Text style={{ fontSize: 22, fontWeight: "700" }}>{date.getDate()} Dec <Image source={require("../assets/clock.png")} /> {date.getDate() + 1}Dec</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginBottom: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: "400", color: "#696969" }}>Sylhet</Text>
                <Text style={{ fontSize: 16, fontWeight: "400", color: "#696969" }}>|</Text>
                <Text style={{ fontSize: 16, fontWeight: "400", color: "#696969" }}>2 PM to 5 AM</Text>
                <Text style={{ fontSize: 16, fontWeight: "400", color: "#696969" }}>|</Text>
                <Text style={{ fontSize: 16, fontWeight: "400", color: "#696969" }}>Economy</Text>
            </View>

            <View style={{ marginVertical: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "700" }}>Payment Method</Text>
                <View style={{ backgroundColor: "#F5F5F5", flexDirection: "row", alignItems: "center", paddingHorizontal: 10, paddingVertical: 8, borderRadius: 15 }}>
                    <Image source={require("../assets/gpay.png")} />
                    <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "400" }}>Google Pay</Text>
                </View>
            </View>

            <View style={{ marginVertical: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "700" }}>Guests & Rooms</Text>
                <Text style={{ backgroundColor: "#F5F5F5", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 15, fontSize: 16, fontWeight: "400" }}>1room,4persons</Text>
            </View>

            <View style={{ marginVertical: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "700" }}>Coupon Code</Text>
                <View style={{ backgroundColor: "#F5F5F5", flexDirection: "row", alignItems: "center", paddingHorizontal: 10, paddingVertical: 8, borderRadius: 15 }}>
                    <TextInput style={{ flex: 1, textAlign: "center" }} placeholder="Enter Your Coupon code" editable={false} />
                    <TouchableOpacity style={{ backgroundColor: "#448178", borderRadius: 20 }} >
                        <Text style={{ color: "white", paddingVertical: 10, paddingHorizontal: 20, fontSize: 15, fontWeight: "600" }}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={{ fontSize: 20, fontWeight: "700", marginVertical: 10 }}>1room X 1 night</Text>

            <View style={{ backgroundColor: "#F5F5F5", borderWidth: 1, padding: 15, borderRadius: 15, marginVertical: 10 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 3 }}>
                    <Text style={{ fontSize: 16, fontWeight: "400" }}>Price</Text>
                    <Text style={{ fontSize: 14, color: "#767676" }}>$200.00</Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 3 }}>
                    <Text style={{ fontSize: 16, fontWeight: "400" }}>After Discount</Text>
                    <Text style={{ fontSize: 14, color: "#767676" }}>$160.00</Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 3 }}>
                    <Text style={{ fontSize: 16, fontWeight: "400" }}>Tax</Text>
                    <Text style={{ fontSize: 14, color: "#767676" }}>$25.00</Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 3 }}>
                    <Text style={{ fontSize: 16, fontWeight: "400" }}>Total Price</Text>
                    <Text style={{ fontSize: 14, color: "#767676" }}>$185.00</Text>
                </View>

            </View>
            <TouchableOpacity onPress={() =>navigation.navigate("placed")} style={{ backgroundColor: "#448178", borderRadius: 20 }} >
                <Text style={{ color: "white", paddingVertical: 10, paddingHorizontal: 20, fontSize: 20, fontWeight: "600", textAlign: "center" }}>Confirm</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Checkout