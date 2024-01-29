import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import DestinationScreen from "./src/screens/DestinationScreen";



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Welcome' component={WelcomeScreen} />
          <Stack.Screen name='Destination' component={DestinationScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}