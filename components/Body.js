import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Body = ({ year, month, today }) => {
  console.log("today", today);
  // 이번 달 날짜 구하기(지난 달, 다음 달 일부 포함)
  // 날짜는 1~31, 월은 0~11 ,요일은 1~7
  const [allDays, setAllDays] = useState({});

  const getAllDays = (year, month) => {
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
        days: currentMonthLastDay !== 6 ? nextDays : [],
      },
    });
  };

  useEffect(() => {
    getAllDays(year, month);
  }, [year, month, today]);

  return (
    <View style={styles.dayOfTheWeekBox}>
      {Object.keys(allDays).map((item) =>
        allDays[item].days.map((day, idx) => (
          <View style={styles.daysBox} key={idx}>
            <View style={styles.dayBox}>
              <Text>{day}</Text>
            </View>
          </View>
        ))
      )}
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  dayOfTheWeekBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
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
    width: 50,
    height: 30,
  },
});
