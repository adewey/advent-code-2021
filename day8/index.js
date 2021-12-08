const valuesInCommon = (digit1, digit2) =>
  digit1
    .split('')
    .reduce((acc, segment) => (digit2.includes(segment) ? acc + 1 : acc), 0);

const determineDigit = (digit, decoded, shouldDecode) => {
  const commonValues = Object.entries(decoded).reduce(
    (acc, [key, val]) => ({ ...acc, [val]: valuesInCommon(digit, key) }),
    {}
  );

  switch (digit.length) {
    case 2:
      return 1;
    case 3:
      return 7;
    case 4:
      return 4;
    case 5: {
      if (shouldDecode) {
        if (
          commonValues[1] === 1 &&
          commonValues[7] === 2 &&
          commonValues[4] === 2
        ) {
          return 2;
        }
        if (
          commonValues[1] === 2 &&
          commonValues[7] === 3 &&
          commonValues[4] === 3
        ) {
          return 3;
        }
        if (
          commonValues[1] === 1 &&
          commonValues[7] === 2 &&
          commonValues[4] === 3
        ) {
          return 5;
        }
      }
      break;
    }
    case 6: {
      if (shouldDecode) {
        if (
          commonValues[1] === 2 &&
          commonValues[7] === 3 &&
          commonValues[4] === 3
        ) {
          return 0;
        }
        if (
          commonValues[1] === 1 &&
          commonValues[7] === 2 &&
          commonValues[4] === 3
        ) {
          return 6;
        }
        if (
          commonValues[1] === 2 &&
          commonValues[7] === 3 &&
          commonValues[4] === 4
        ) {
          return 9;
        }
      }
      break;
    }
    case 7:
      return 8;
  }
};

const decodeDisplay = (display, shouldDecode) =>
  display.reduce(
    (acc, digit) => ({
      ...acc,
      [digit]: determineDigit(digit, acc, shouldDecode),
    }),
    {}
  );

const splitInput = displayInput => {
  const split = displayInput.split(' | ');
  const display = split[0].split(' ').reduce((acc, code) => {
    const orderedCode = code
      .split('')
      .sort()
      .join('');
    if (code.length === 5 || code.length === 6) {
      acc.push(orderedCode);
    } else {
      acc.unshift(orderedCode);
    }
    return acc;
  }, []);
  const output = split[1].split(' ').map(code =>
    code
      .split('')
      .sort()
      .join('')
  );
  return { display, output };
};

const calculateTotal = displayInput => {
  const total = displayInput.reduce((acc, displayLine) => {
    const { display, output } = splitInput(displayLine);
    const decoded = decodeDisplay(display, false);
    const calc = output.reduce(
      (acc, digit) => (decoded[digit] ? acc + 1 : acc),
      0
    );
    return acc + calc;
  }, 0);
  return total;
};

const calculateDisplay = displayInput => {
  const total = displayInput.reduce((acc, displayLine) => {
    const { display, output } = splitInput(displayLine);
    const decoded = decodeDisplay(display, true);
    const calc = output.reduce((acc, digit) => acc + decoded[digit], '');
    return acc + parseInt(calc);
  }, 0);
  return total;
};

export default (displayInput, shouldDecode) => {
  return shouldDecode
    ? calculateDisplay(displayInput)
    : calculateTotal(displayInput);
};
