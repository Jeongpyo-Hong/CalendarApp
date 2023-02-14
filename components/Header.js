import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const Header = ({ year, month, nextMonthBtn, prevMonthBtn }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={prevMonthBtn}>
        <FontAwesome5 name="angle-left" size={35} color="tomato" />
      </TouchableOpacity>
      <Text style={{ fontSize: 16, fontWeight: "600" }}>
        {month}월&nbsp;&nbsp;{year}
      </Text>
      <TouchableOpacity onPress={nextMonthBtn}>
        <FontAwesome5 name="angle-right" size={35} color="tomato" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SCREEN_WIDTH,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
});
