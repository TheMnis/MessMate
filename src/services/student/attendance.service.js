import attendanceData from "../../data/attendanceData";

export function getAttendance() {
  return attendanceData;
}

export function getAttendanceSummary() {
  const total = attendanceData.length;

  const present = attendanceData.filter(
    (item) => item.status === "Present"
  ).length;

  const absent = attendanceData.filter(
    (item) => item.status === "Absent"
  ).length;

  const leave = attendanceData.filter(
    (item) => item.status === "Leave"
  ).length;

  const percentage =
    total === 0
      ? 0
      : Math.round((present / total) * 100);

  return {
    total,
    present,
    absent,
    leave,
    percentage,
  };
}