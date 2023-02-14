import { Dimensions, StyleSheet, Text, View } from "react-native";
import { flexStyle } from "../GlobalStyle";
import { useState } from "react";
import Days from "../components/Days";
import Header from "../components/Header";
import DayOfTheWeek from "../components/DayOfTheWeek";

// 화면 꽉차게 width 설정
const { width: SCREEN_WIDTH } = Dimensions.get("window");

const Calendar = () => {
  // 이번 달 날짜 구하기(지난 달, 다음 달 일부 포함)
  // 일: 1~31, 월: 0~11, 요일: 1~7 (월은 0부터 시작하므로 +1)
  const DATE = new Date();
  const YEAR = DATE.getFullYear();
  const MONTH = DATE.getMonth() + 1;
  const DAY = DATE.getDate();
  const today = { year: YEAR, month: MONTH, day: DAY };
  const [year, setYear] = useState(YEAR);
  const [month, setMonth] = useState(MONTH);

  const nextMonthBtn = () => {
    // 예외처리: 12월 다음은 1월
    if (month === 12) {
      setYear((prev) => prev + 1);
      setMonth(1);
    } else {
      setMonth((prev) => prev + 1);
    }
  };
  const prevMonthBtn = () => {
    // 예외처리: 1월 이전은 12월
    if (month === 1) {
      setYear((prev) => prev - 1);
      setMonth(12);
    } else {
      setMonth((prev) => prev - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Header
        year={year}
        month={month}
        nextMonthBtn={nextMonthBtn}
        prevMonthBtn={prevMonthBtn}
        SCREEN_WIDTH={SCREEN_WIDTH}
      />
      <View style={styles.body}>
        <DayOfTheWeek />
        <Days year={year} month={month} today={today} />
      </View>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: flexStyle,
  header: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SCREEN_WIDTH,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  body: {
    flex: 9.5,
    width: SCREEN_WIDTH,
    padding: 20,
  },
});
