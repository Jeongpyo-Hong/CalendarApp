import { StyleSheet, Text, View } from "react-native";
import { flexStyle } from "../GlobalStyle";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: flexStyle,
});
