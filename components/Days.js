import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Days = ({ year, month, today }) => {
  const [allDays, setAllDays] = useState({});
  const [clicked, setClicked] = useState({
    ...today,
    state: "",
  });

  const changeDay = (dayClicked) => {
    setClicked(dayClicked);
  };

  const getAllDays = (year, month) => {
    // new Date()의 3번째 인자로 0을 넣어서 마지막 날짜 조회 가능
    // getDay()로 요일 index 조회 가능(0이 일요일 6이 토요일)
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
        allDays[item].days.map((day, idx) => {
          const dayClicked = {
            state: item,
            year: allDays[item].year,
            month: allDays[item].month,
            day,
          };

          return (
            <View style={styles.daysBox} key={idx}>
              <View style={styles.dayBox}>
                <TouchableOpacity
                  onPress={() => changeDay(dayClicked)}
                  style={
                    clicked.year === dayClicked.year &&
                    clicked.month === dayClicked.month &&
                    clicked.day === dayClicked.day
                      ? styles.clicked
                      : null
                  }
                >
                  <Text style={item === "current" ? null : styles.prevOrNext}>
                    {day}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })
      )}
    </View>
  );
};

export default Days;

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
  clicked: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    borderWidth: 1.5,
    borderRadius: 15,
    borderColor: "tomato",
  },
  prevOrNext: {
    color: "gray",
  },
});
