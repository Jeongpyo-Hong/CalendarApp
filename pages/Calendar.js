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

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const Calendar = () => {
  const DATE = new Date();
  const YEAR = DATE.getFullYear();
  const MONTH = DATE.getMonth() + 1;
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

  // 이번 달 날짜 구하기(지난 달, 다음 달 일부 포함)
  // 날짜는 1~31, 월은 0~11 ,요일은 1~7
  const currentAllDays = () => {
    const [allDays, setAllDays] = useState({});

    const prevMonthLastDate = new Date(year, month - 1, 0).getDate();
    const prevMonthLastDay = new Date(year, month - 1, 0).getDay();
    const currentMonthLastDate = new Date(year, month, 0).getDate();
    const currentMonthLastDay = new Date(year, month, 0).getDay();

    const prevDays = Array.from(
      { length: prevMonthLastDay + 1 },
      (v, i) => prevMonthLastDate - prevMonthLastDay + i
    );
    const currentDays = Array.from(
      { length: currentMonthLastDate },
      (v, i) => i + 1
    );
    const nextDays = Array.from(
      { length: 6 - currentMonthLastDay },
      (v, i) => i + 1
    );

    setAllDays({
      prev: {
        year: month === 1 ? year - 1 : year,
        month: month !== 12 ? month - 1 : 1,
        days: prevMonthLastDay !== 6 ? prevDays : [],
      },
      current: {
        year,
        month,
        days: currentDays,
      },
      next: {
        year: month === 12 ? year + 1 : year,
        month: month !== 12 ? month + 1 : 1,
        days: prevMonthLastDay !== 6 ? prevDays : [],
      },
    });
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
        <View style={styles.daysBox}>
          <View style={styles.dayBox}>
            <Text>29</Text>
          </View>
        </View>
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
    // backgroundColor: "teal",
  },
  daysBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 15,
  },
  dayBox: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    // backgroundColor: "yellow",
  },
});
