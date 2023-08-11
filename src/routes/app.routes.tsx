import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Details } from "../screens/Details";
import { ShoppingCart } from "../screens/ShoppingCart";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return(
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='home' component={Home} />
      <Screen name='details' component={Details} />
      <Screen name='shopping' component={ShoppingCart} />
    </Navigator>
  )
}
