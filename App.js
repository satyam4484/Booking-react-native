import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './components/Home';
import About from './components/About';
import DetailHotel from './components/DetailHotel';
import Checkout from './components/Checkout';
import Placed from './components/Placed';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{

      }}>
        <Stack.Screen name='home' component={Home} options={{
          title: "Acio Booking",
          headerTitleAlign: 'center',
          headerShadowVisible: false
        }} />
        <Stack.Screen name='about' component={About} options={{
          title:"Hotels",
          headerTitleAlign: 'center',
          headerShadowVisible: false
        }} />
        <Stack.Screen name='checkout' component={Checkout} options={{
          title:"Checkout",
          headerShadowVisible: false,
          
        }} />

        <Stack.Screen name='placed' component={Placed} options={{
          title:"Back",
          headerShadowVisible: false,
          headerStyle:{
            backgroundColor:'#448178'
          },
          headerTintColor: '#ffffff', // Set the text color of the header buttons
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#ffffff', // Set the text color of the header title
          },
          headerShadowVisible: false,
        }} />

        <Stack.Screen name='hotel_name' component={DetailHotel} 
        options={({ route }) => ({
          title: route.params.name,
          headerShadowVisible:false,
          headerTitleAlign:'center'
        })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


