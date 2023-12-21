import {
    View,
    Text,
    Button,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const search = require("../assets/search.png");
const notify = require("../assets/notification.png");
const location = require("../assets/location.png");
const calender = require("../assets/calender.png");
const profile = require("../assets/profile.png");
const Resort1 = require("../assets/Resort1.png");

const Home = ({ navigation }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [startDateVisible, setStartDateVisible] = useState(false);
    const [endDate, setEndDate] = useState(new Date());
    const [endDateVisible, setEndDateVisible] = useState(false);

    const [selectedLanguage, setSelectedLanguage] = useState("Java");

    console.log(selectedLanguage);
    return (
        <View className="p-5 bg-white ">
            {/* first  */}
            <View className="flex flex-row justify-between">
                <View style={{ width: 220 }}>
                    <Text className="text-black text-3xl" >Let Explore the world!</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Image style={styles.icons} source={search} />
                    <Image style={styles.icons} source={notify} />
                </View>
            </View>

            {/* second */}

            <View style={styles.typesContainer}>
                <Text style={styles.typeText}>Flight booking</Text>
                <Text style={{ ...styles.typeText, color: "#0D813B" }}>
                    Hotel booking
                </Text>
            </View>

            {/* Forms */}

            <KeyboardAvoidingView>
                <View >
                    <View style={styles.inputGroup}>
                        <Image style={styles.inputLocation} source={location} />
                        <TextInput
                            style={styles.input}
                            placeholder="From"
                            placeholderTextColor="#767676"
                            selectionColor="#767676"
                        />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ ...styles.inputGroup, flex: 1, justifyContent: "flex-start", marginRight: 10 }}>
                            <Image source={calender} />
                            <TouchableOpacity onPress={() => setStartDateVisible(true)}>
                                <TextInput style={{ ...styles.calender, color: "black" }} editable={false} placeholder="From">{`${startDate.getDate()}-${startDate.getMonth() + 1}-${startDate.getFullYear()}`}</TextInput>
                                <DateTimePickerModal
                                    isVisible={startDateVisible}
                                    mode="date"
                                    onConfirm={(date) => {
                                        setStartDate(date);
                                    }}
                                    onCancel={() => setStartDateVisible(false)}
                                />
                            </TouchableOpacity>
                        </View>


                        <View style={{ ...styles.inputGroup, flex: 1, justifyContent: "flex-start" }}>
                            <Image source={calender} />
                            <TouchableOpacity onPress={() => setEndDateVisible(true)}>
                                <TextInput style={{ ...styles.calender, color: "black" }} editable={false} placeholder="From">{`${endDate.getDate()}-${endDate.getMonth() + 1}-${endDate.getFullYear()}`}</TextInput>
                                <DateTimePickerModal
                                    isVisible={endDateVisible}
                                    mode="date"
                                    onConfirm={(date) => {
                                        setEndDate(date);
                                        setEndDateVisible(false);
                                    }}
                                    onCancel={() => setEndDateVisible(false)}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={styles.inputGroup}>
                        <Image source={profile} />

                        <Picker
                        style={{color:"red",flex:1}}
                            selectedValue="java"
                            itemStyle={{ color: "#000",borderWidth:2,backgroundColor:"yellow" }}
                            onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
                            selectionColor="red"
                            prompt="Select an item"
                            placeholder="Select Item"
                        >
                            <Picker.Item color="black" label="Java" value="java" />
                            <Picker.Item color="black" label="JavaScript" value="js" />
                            {/* Add more items as needed */}
                        </Picker>

                    </View>
                    <TouchableOpacity onPress={() => console.log("shsj")} style={styles.button}>
                        <Text style={styles.buttonText}>Search Hotels</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>

            {/* special offers */}

            <View style={styles.listall}>
                <Text style={styles.listAllLeft}>Spacial offers</Text>
                <TouchableOpacity onPress={() => navigation.navigate("about",{logo:Resort1,name:"Flagship",location:"Dhaka ,Bangladesh",locationlogo:location,price:200})}>
                    <Text style={styles.listAllRight}>View All</Text>
                </TouchableOpacity>
            </View>

            {/* list */}

            <View style={{ flexDirection: "row", overflow:"scroll" }}>
                <TouchableOpacity onPress={() => navigation.navigate("hotel_name",{name:"Presoton Hotel"})} style={{marginRight:10,width:250}}>
                    <View style={{ position: "relative" }}>
                        <Text style={{ fontSize: 13, fontWeight: "400", position: "absolute", zIndex: 1, top: 15, left: 15, borderRadius: 20, paddingHorizontal: 8, paddingVertical: 4, backgroundColor: "rgba(0, 0, 0, 0.40)", color: "#FFFFFF" }}>20% Off</Text>
                        <Image style={{ fontSize: 13, fontWeight: "400", position: "absolute", zIndex: 1, top: 15, right: 15, borderRadius: 30, padding: 10, width: 16, height: 16, backgroundColor: "rgba(0, 0, 0, 0.40)" }} source={require("../assets/heart.png")} />
                        <Image source={Resort1} style={{ marginBottom: 10 ,width:250}} />
                    </View>
                    <Text style={{ color: '#000', fontSize: 18, fontWeight: "600", fontStyle: "normal", marginVertical: 3 }}>presoton Hotel</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image style={{ width: 10, marginRight: 5, resizeMode: "contain" }} source={location} />
                        <Text style={{ color: "#767676", fontSize: 12 }}>Dhaka ,Bangladesh</Text>
                    </View>
                    <Text style={{ color: '#000', fontSize: 15, fontStyle: "normal", fontWeight: "600" }}>$200.00</Text>
                </TouchableOpacity>

                {/* second */}

                <TouchableOpacity onPress={() => navigation.navigate("hotel_name",{name:"Presoton Hotel"})} >
                    <View style={{ position: "relative" }}>
                        <Text style={{ fontSize: 13, fontWeight: "400", position: "absolute", zIndex: 1, top: 15, left: 15, borderRadius: 20, paddingHorizontal: 8, paddingVertical: 4, backgroundColor: "rgba(0, 0, 0, 0.40)", color: "#FFFFFF" }}>20% Off</Text>
                        <Image style={{ fontSize: 13, fontWeight: "400", position: "absolute", zIndex: 1, top: 15, right: 15, borderRadius: 30, padding: 10, width: 16, height: 16, backgroundColor: "rgba(0, 0, 0, 0.40)" }} source={require("../assets/heart.png")} />
                        <Image source={Resort1} style={{ marginBottom: 10 }} />
                    </View>
                    <Text style={{ color: '#000', fontSize: 18, fontWeight: "600", fontStyle: "normal", marginVertical: 3 }}>presoton Hotel</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image style={{ width: 10, marginRight: 5, resizeMode: "contain" }} source={location} />
                        <Text style={{ color: "#767676", fontSize: 12 }}>Dhaka ,Bangladesh</Text>
                    </View>
                    <Text style={{ color: '#000', fontSize: 15, fontStyle: "normal", fontWeight: "600" }}>$200.00</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    picker: {
        width: '80%',
        height: 40,
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
      },
      
    container: {
        backgroundColor: "white",
        padding: 20,
    },
    TitleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexGrow: 1,
        marginBottom: 12,
    },
    titleText: {
        color: "#000",
        fontSize: 30,
        fontStyle: "normal",
        fontWeight: "600",
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 70,
        marginTop: 10,
    },
    icons: {
        marginRight: 20,
    },
    typesContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    typeText: {
        fontSize: 15,
        fontWeight: "600",
        padding: 2,
        color: "#767676",
    },
    inputGroup: {
        borderWidth: 1,
        flexDirection: "row",
        borderRadius: 15,
        padding: 6,
        borderColor: "#AEAEAE",
        backgroundColor: "rgba(217, 217, 217, 0.00)",
        alignItems: "center",
        marginBottom: 10,
        justifyContent: "space-between"

    },
    inputLocation: {
        marginRight: 4,
    },
    input: {
        flex: 1,
        color: "#000",
        marginRight: 4,
        marginLeft: 4,
    },
    dateButton: {
        backgroundColor: "#AEAEAE"
    },
    calender: {
        padding: 5,

    },
    button: {
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'var(--side-color, #AEAEAE)',
        backgroundColor: '#448178',
        width: 310,
        height: 51,
        marginVertical: 12,
        flexShrink: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    listall: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10
    },
    listAllLeft: {
        color: "#000",
        fontSize: 25,
        fontStyle: "normal",
        fontWeight: "700"
    },
    listAllRight: {
        color: "#757575",
        fontSize: 18,
        fontStyle: "normal",
        fontWeight: "600"
    }
});

export default Home;
