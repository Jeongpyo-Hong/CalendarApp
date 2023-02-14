import { StyleSheet, Text, View } from "react-native";

const DayOfTheWeek = () => {
  return (
    <View style={styles.dayOfTheWeekBox}>
      {dayOfTheWeekArr.map((el, idx) => (
        <Text key={idx} style={dayOfTheWeekStyles(el).dayOfTheWeek}>
          {el}
        </Text>
      ))}
    </View>
  );
};

export default DayOfTheWeek;

const dayOfTheWeekArr = ["일", "월", "화", "수", "목", "금", "토"];
const dayOfTheWeekStyles = (day) =>
  StyleSheet.create({
    dayOfTheWeek: {
      color: day === "일" ? "red" : day === "토" ? "blue" : null,
    },
  });

const styles = StyleSheet.create({
  dayOfTheWeekBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
  },
});
