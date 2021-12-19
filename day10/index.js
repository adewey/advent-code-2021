const invalidPointValue = expectedChar => {
  switch (expectedChar) {
    case ')':
      return 3;
    case ']':
      return 57;
    case '}':
      return 1197;
    case '>':
      return 25137;
  }
  return 0;
};

const incompletePointValue = expectedChar => {
  switch (expectedChar) {
    case ')':
      return 1;
    case ']':
      return 2;
    case '}':
      return 3;
    case '>':
      return 4;
  }
  return 0;
};

const syntaxErrors = (command, scoreIncomplete) => {
  const expecting = [];
  for (const index in command) {
    const char = command[index];
    const expectedChar =
      char == '{'
        ? '}'
        : char == '['
        ? ']'
        : char == '<'
        ? '>'
        : char == '('
        ? ')'
        : '';
    if (expectedChar) {
      expecting.push(expectedChar);
    } else {
      if (expecting[expecting.length - 1] !== char) {
        return scoreIncomplete ? 0 : invalidPointValue(char);
      }
      expecting.pop();
    }
  }
  return scoreIncomplete
    ? expecting
        .reverse()
        .reduce((acc, expected) => acc * 5 + incompletePointValue(expected), 0)
    : 0;
};

export default (navigation, middleScore) => {
  const scores = navigation
    .map(command => syntaxErrors(command, middleScore))
    .filter(score => !!score)
    .sort((a, b) => b - a);
  return middleScore
    ? scores[Math.floor(scores.length / 2)]
    : scores.reduce((acc, score) => acc + score, 0);
};
