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

  /* ---------- Streak ---------- */

  let currentStreak = 0;

  for (let i = attendanceData.length - 1; i >= 0; i--) {
    if (attendanceData[i].status === "Present") {
      currentStreak++;
    } else {
      break;
    }
  }

  let bestStreak = 0;
  let streak = 0;

  attendanceData.forEach((day) => {
    if (day.status === "Present") {
      streak++;
      bestStreak = Math.max(bestStreak, streak);
    } else {
      streak = 0;
    }
  });

  /* ---------- Target ---------- */

  const targetPercentage = 75;

  const requiredPresentDays = Math.max(
    0,
    Math.ceil(
      (targetPercentage / 100) * total - present
    )
  );

  return {
    total,

    present,

    absent,

    leave,

    percentage,

    currentStreak,

    bestStreak,

    targetPercentage,

    requiredPresentDays,

    workingDays: total,

    attendanceScore:
      percentage >= 90
        ? "Excellent"
        : percentage >= 75
        ? "Good"
        : percentage >= 60
        ? "Average"
        : "Poor",
  };
}