import { StyleSheet, Text, View } from "react-native";
import { flexStyle } from "../GlobalStyle";

const Library = () => {
  return (
    <View style={styles.container}>
      <Text>Library</Text>
    </View>
  );
};

export default Library;

const styles = StyleSheet.create({
  container: flexStyle,
});
