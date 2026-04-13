import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./features/Home";
import Calculator from "./features/Calculator";
import { NavigationContainer } from "@react-navigation/native";

export type RootStackParamList = {
  Home: undefined
  Calculator: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Calculator" component={Calculator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App