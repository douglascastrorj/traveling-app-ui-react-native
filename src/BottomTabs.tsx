import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductsScreen";
import CartScreen from "./screens/CartScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator>
        <Tab.Group screenOptions={{headerShown: false}}>
            <Tab.Screen options={{tabBarLabel: 'Home'}} name="Home" component={HomeScreen} />
            <Tab.Screen options={{tabBarLabel: 'Products'}} name="Products" component={ProductScreen} />
            <Tab.Screen options={{tabBarLabel: 'Cart'}} name="Cart" component={CartScreen} />
        </Tab.Group>
    </Tab.Navigator>
  );
}