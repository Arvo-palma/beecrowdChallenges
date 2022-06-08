var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const getScores = (lines) => {
  const scores = lines[0].split(' ');
  const examScore = parseFloat(lines[1]) || 0;
  const [N1, N2, N3, N4] = scores.map((score) => parseFloat(score));

  return [N1, N2, N3, N4, examScore];
}

const avaliation = (N1, N2, N3, N4, examScore) => {
  const average = ((N1 * 2) + (N2 * 3) + (N3 * 4) + N4) / 10;
  const examAverage = (average + examScore) / 2;
  if (average >= 7.0) {
    return [average.toFixed(1), 'Aluno aprovado.'];
  } else if (average < 5.0) {
    return [average.toFixed(1), 'Aluno reprovado.'];
  } else {
    if (examAverage >= 5.0) {
      return [average.toFixed(1), 'Aluno em exame.', examScore.toFixed(1), 'Aluno aprovado.', examAverage.toFixed(1)];
    }
    if (examAverage < 5.0) {
      return [average.toFixed(1), 'Aluno em exame.', examScore.toFixed(1), 'Aluno reprovado.', examAverage.toFixed(1)];
    }
  }
}

const resolution = (lines) => {
  const scores = getScores(lines);
  const results = avaliation(...scores);

  if (results.length === 2) {
    return `Media: ${results[0]}\n${results[1]}`;
  } else {
    return `Media: ${results[0]}\n${results[1]}\nNota do exame: ${results[2]}\n${results[3]}\nMedia final: ${results[4]}`;
  }
}

console.log(resolution(lines));
