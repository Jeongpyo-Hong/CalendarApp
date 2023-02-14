import { StyleSheet, Text, View } from "react-native";
import { flexStyle } from "../GlobalStyle";

const MyPage = () => {
  return (
    <View style={styles.container}>
      <Text>MyPage</Text>
    </View>
  );
};

export default MyPage;

const styles = StyleSheet.create({
  container: flexStyle,
});
