const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const formatAnswer = (count) => {
  return `O JOGO DUROU ${count.hours} HORA(S) E ${count.minutes} MINUTO(S)`;
};

const prepareInput = (lines) => {
  const stringValues = lines[0].split(' ');
  const [startHour, startMinute, endHour, endMinute] = stringValues.map(value => parseInt(value));

  return {startHour, startMinute, endHour, endMinute};
};

// função de conversão com base em https://stackoverflow.com/questions/22820335/javascript-convert-hhmm-to-decimal
const timeToDecimal = ({startHour, startMinute, endHour, endMinute}) => {
  const conversion = (hours, minutes) => {
    const decimal = (minutes/6)*10;
    return parseFloat(hours + '.' + (decimal < 10 ? '0' : '') + decimal);
  };
  const decimals = [
    conversion(startHour, startMinute),
    conversion(endHour, endMinute),
  ];
  return decimals;
};

const decimalToTime = (valueInDecimal) => {
  let [hours, minutes] =  valueInDecimal.toString().split('.'); // capture just the minutes
  minutes = minutes ? Number(('0.' + minutes)).toFixed(2) : 0; // convert to number
  hours = Number(hours);
  const minutesInTime = Math.round((minutes)*60, 2);
  return [hours, minutesInTime];
};

const resolution = (lines) => {
  const timeValues = prepareInput(lines);
  const [start, end] = timeToDecimal(timeValues);
  let timeDiff = 0;
  if (start === end) timeDiff = 24;
  if (end - start < 0) timeDiff = (end + 24 - start);
  if (end - start > 0) timeDiff = (end - start);
  const count = {
    hours: decimalToTime(timeDiff)[0],
    minutes: decimalToTime(timeDiff)[1],
  };
  return formatAnswer(count);
};

console.log(resolution(lines));
