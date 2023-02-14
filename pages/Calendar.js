import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { flexStyle } from "../GlobalStyle";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import Body from "../components/Body";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const Calendar = () => {
  const DATE = new Date();
  const YEAR = DATE.getFullYear();
  const MONTH = DATE.getMonth() + 1;
  const DAY = DATE.getDate();
  const today = { year: YEAR, month: MONTH, date: DAY };
  const [year, setYear] = useState(YEAR);
  const [month, setMonth] = useState(MONTH);

  const nextMonthBtn = () => {
    if (month === 12) {
      setYear((prev) => prev + 1);
      setMonth(1);
    } else {
      setMonth((prev) => prev + 1);
    }
  };
  const prevMonthBtn = () => {
    if (month === 1) {
      setYear((prev) => prev - 1);
      setMonth(12);
    } else {
      setMonth((prev) => prev - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={prevMonthBtn}>
          <FontAwesome5 name="angle-left" size={30} color="tomato" />
        </TouchableOpacity>
        <Text style={{ fontSize: 16 }}>
          {month}월&nbsp;&nbsp;{year}
        </Text>
        <TouchableOpacity onPress={nextMonthBtn}>
          <FontAwesome5 name="angle-right" size={30} color="tomato" />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.dayOfTheWeekBox}>
          {dayOfTheWeekArr.map((el, idx) => (
            <Text key={idx} style={dayOfTheWeekStyles(el).dayOfTheWeek}>
              {el}
            </Text>
          ))}
        </View>
        <Body year={year} month={month} today={today} />
      </View>
    </View>
  );
};

export default Calendar;

const dayOfTheWeekArr = ["일", "월", "화", "수", "목", "금", "토"];
const dayOfTheWeekStyles = (day) =>
  StyleSheet.create({
    dayOfTheWeek: {
      color: day === "일" ? "red" : day === "토" ? "blue" : "gray",
    },
  });

const styles = StyleSheet.create({
  container: flexStyle,
  header: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SCREEN_WIDTH,
    padding: 10,
  },
  body: {
    flex: 9.5,
    width: SCREEN_WIDTH,
    padding: 20,
  },
  dayOfTheWeekBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
  },
});
