const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const prepareInput = (input: string) => {
  const lines = input.split("\n");
  const startDay = lines[0].split(" ")[1];
  const [startHour, startMinute, startSecond] = lines[1].split(":");
  const endDay = lines[2].split(" ")[1];
  const [endHour, endMinute, endSecond] = lines[3].split(":");
  const timeRegister = {
    start: {
      day: parseFloat(startDay),
      hour: parseFloat(startHour),
      minute: parseFloat(startMinute),
      second: parseFloat(startSecond),
    },
    end: {
      day: parseFloat(endDay),
      hour: parseFloat(endHour),
      minute: parseFloat(endMinute),
      second: parseFloat(endSecond),
    },
  };
  return timeRegister;
};

type result = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
const formatAnswer = (result: result) => {
  return [
    `${result.days} dia(s)`,
    `${result.hours} hora(s)`,
    `${result.minutes} minuto(s)`,
    `${result.seconds} segundo(s)`,
  ].join("\n");
};

export const resolution = (input: string) => {
  const [dayInSeconds, hourInSeconds, minuteInSeconds] = [
    86400.0, 3600.0, 60.0,
  ];
  const timeRegister = prepareInput(input);
  const { start, end } = timeRegister;
  const startInSeconds =
    start.day * dayInSeconds +
    start.hour * hourInSeconds +
    start.minute * minuteInSeconds +
    start.second;
  const endInSeconds =
    end.day * dayInSeconds +
    end.hour * hourInSeconds +
    end.minute * minuteInSeconds +
    end.second;
  const secondsDiff = endInSeconds - startInSeconds;
  const totalDays = secondsDiff / dayInSeconds;
  let remainingSeconds = secondsDiff % dayInSeconds;
  const totalHours = remainingSeconds / hourInSeconds;
  remainingSeconds = remainingSeconds % hourInSeconds;
  const totalMinutes = remainingSeconds / minuteInSeconds;
  remainingSeconds = remainingSeconds % minuteInSeconds;
  const totalSeconds = remainingSeconds;
  const result = {
    days: Math.floor(totalDays),
    hours: Math.floor(totalHours),
    minutes: Math.floor(totalMinutes),
    seconds: Math.floor(totalSeconds),
  };
  return formatAnswer(result);
};

console.log(resolution(input));
