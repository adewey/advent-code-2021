const modifiers = {
  down: ({ aim, depth, position }, value, shouldAim) => ({
    aim: aim + value,
    depth: shouldAim ? depth : depth + value,
    position,
  }),
  forward: ({ aim, depth, position }, value, shouldAim) => ({
    aim,
    depth: shouldAim ? depth + aim * value : depth,
    position: position + value,
  }),
  up: ({ aim, depth, position }, value, shouldAim) => ({
    aim: aim - value,
    depth: shouldAim ? depth : depth - value,
    position,
  }),
};

export default (commands, shouldAim = false) =>
  commands.reduce(
    (acc, command) => {
      const [direction, value] = command.split(' ');
      const { aim, depth, position } = modifiers[direction](
        acc,
        parseInt(value),
        shouldAim
      );
      return { aim, depth, position, total: depth * position };
    },
    { aim: 0, depth: 0, position: 0, total: 0 }
  ).total;
