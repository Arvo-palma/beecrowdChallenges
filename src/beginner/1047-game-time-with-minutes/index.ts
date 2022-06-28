const filePath = require("path").resolve(__dirname, "./dev/stdin");
const input = require("fs").readFileSync(filePath, "utf8");

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const formatAnswer = (count: { hours: number; minutes: number }) => {
  return `O JOGO DUROU ${count.hours} HORA(S) E ${count.minutes} MINUTO(S)`;
};

const prepareInput = (input: string) => {
  const lines = input.split("\n");
  const stringValues = lines[0].split(" ");
  const [startHour, startMinute, endHour, endMinute] = stringValues.map(
    (value) => parseInt(value)
  );

  return { startHour, startMinute, endHour, endMinute };
};

// função de conversão com base em https://stackoverflow.com/questions/22820335/javascript-convert-hhmm-to-decimal
const timeToDecimal = (times: {
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
}) => {
  const conversion = (hours: number, minutes: number) => {
    const decimal = (minutes / 6) * 10;
    return parseFloat(hours + "." + (decimal < 10 ? "0" : "") + decimal);
  };
  const decimals = [
    conversion(times.startHour, times.startMinute),
    conversion(times.endHour, times.endMinute),
  ];
  return decimals;
};

const decimalToTime = (valueInDecimal: number) => {
  const [hours, minutes] = valueInDecimal.toString().split("."); // capture just the minutes
  const timeMinutes = minutes ? Number(Number("0." + minutes).toFixed(2)) : 0; // convert to number
  const timeHours = Number(hours);
  const minutesInTime = Math.round(timeMinutes * 60);
  return [timeHours, minutesInTime];
};

export const resolution = (input: string) => {
  const timeValues = prepareInput(input);
  const [start, end] = timeToDecimal(timeValues);
  let timeDiff = 0;
  if (start === end) timeDiff = 24;
  if (end - start < 0) timeDiff = end + 24 - start;
  if (end - start > 0) timeDiff = end - start;
  const count = {
    hours: decimalToTime(timeDiff)[0],
    minutes: decimalToTime(timeDiff)[1],
  };
  return formatAnswer(count);
};

console.log(resolution(input));
