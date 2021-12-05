class BingoCard {
  constructor() {
    this.rows = [];
  }

  addRow(numbers) {
    this.rows.push(
      numbers
        .replace(/\s+/g, ' ')
        .trim()
        .split(' ')
        .reduce(
          (acc, number) => [
            ...acc,
            { number: parseInt(number), dobbed: false },
          ],
          []
        )
    );
  }

  dob(numberToDob) {
    for (const rowIndex in this.rows) {
      const row = this.rows[rowIndex];
      for (const colIndex in row) {
        const { number } = row[colIndex];
        if (number === numberToDob) {
          this.rows[rowIndex][colIndex].dobbed = true;
          return true;
        }
      }
    }
    return false;
  }

  winner() {
    const magicNumber = 4;
    for (const rowIndex in this.rows) {
      const row = this.rows[rowIndex];
      for (const colIndex in row) {
        const { dobbed } = row[colIndex];
        if (!dobbed) {
          break;
        }
        if (colIndex == magicNumber) return true;
      }
    }
    for (let colIndex = 0; colIndex < magicNumber; colIndex++) {
      for (const rowIndex in this.rows) {
        if (!this.rows[rowIndex][colIndex].dobbed) {
          break;
        }
        if (rowIndex == magicNumber) return true;
      }
    }
    return false;
  }

  hash(number) {
    return (
      this.rows.reduce(
        (calc, row) =>
          calc +
          row.reduce(
            (acc, { dobbed, number }) => (dobbed ? acc : acc + number),
            0
          ),
        0
      ) * number
    );
  }
}

const getBingoCards = bingoInput => {
  const bingoCardInput = bingoInput.slice(2);
  return bingoCardInput.reduce(
    (bingoCards, line) => {
      if (line === '') {
        return [...bingoCards, new BingoCard()];
      }
      bingoCards[bingoCards.length - 1].addRow(line);
      return bingoCards;
    },
    [new BingoCard()]
  );
};

const getBingoNumbers = bingoInput =>
  bingoInput[0].split(',').map(number => parseInt(number));

export default (bingoInput, lastWinner) => {
  const bingoNumbers = getBingoNumbers(bingoInput);
  const bingoCards = getBingoCards(bingoInput);
  let winners = 0;
  for (const bingoNumber of bingoNumbers) {
    for (const bingoCardIndex in bingoCards) {
      const bingoCard = bingoCards[bingoCardIndex];
      if (!bingoCard.winner()) {
        if (bingoCard.dob(bingoNumber)) {
          if (bingoCard.winner()) {
            winners++;
            if (!lastWinner || winners == bingoCards.length) {
              return bingoCard.hash(bingoNumber);
            }
          }
        }
      }
    }
  }
  return 0;
};
