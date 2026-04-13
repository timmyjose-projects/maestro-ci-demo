import { Pressable, Text, View } from "react-native"
import Styles from "../styles"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { RootStackParamList } from "../App"

const Home = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  return (
    <View style={Styles.container}>
      <Pressable
      style={Styles.button}
      onPress={() => navigation.navigate("Calculator")}
      >
        <Text>Calculator</Text>
      </Pressable>
    </View>
  )
}

export default Home