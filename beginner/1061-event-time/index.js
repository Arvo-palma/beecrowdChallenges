const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const prepareInput = (lines) => {
  const startDay = lines[0].split(' ')[1];
  const [startHour, startMinute, startSecond] = lines[1].split(':');
  const endDay = lines[2].split(' ')[1];
  const [endHour, endMinute, endSecond] = lines[3].split(':');
  const timeRegister = {
    start: {
      day: parseInt(startDay),
      hour: parseInt(startHour),
      minute: parseInt(startMinute),
      second: parseInt(startSecond),
    },
    end: {
      day: parseInt(endDay),
      hour: parseInt(endHour),
      minute: parseInt(endMinute),
      second: parseInt(endSecond),
    }
  };
  return timeRegister;
};

const formatAnswer = ({days, hours, minutes, seconds}) => {
  return (
    `${days} dia(s)
    ${hours} hora(s)
    ${minutes} minuto(s)
    ${seconds} segundo(s)`
  );
};

const resolution = (lines) => {
  const timeRegister = prepareInput(lines);
  const { start, end } = timeRegister;
  const startInSeconds = start.hour * 3600 + start.minute * 60 + start.second;
  const endInSeconds = end.hour * 3600 + end.minute * 60 + end.second;
  const secondsDiff = endInSeconds - startInSeconds > 0 ? endInSeconds - startInSeconds : null;
  // PAREI AQUI
  const result = {
    days: end.day - start.day - 1,
    hours: 0,
    minutes: 0,
    seconds:0,
  };
  return result
};

console.log(resolution(lines));
