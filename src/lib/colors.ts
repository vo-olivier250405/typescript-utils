const ansiCodes = {
  black: 30,
  red: 31,
  green: 32,
  yellow: 33,
  blue: 34,
  magenta: 35,
  cyan: 36,
  white: 37,
};

export default function cs(str: string, color: keyof typeof ansiCodes) {
  return `\x1b[${ansiCodes[color]}m${str}\x1b[0m`;
}
