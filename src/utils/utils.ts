export default function isFirstLetterCapital(str: string) {
  const firstChar = str.charAt(0);
  return firstChar.toUpperCase() === firstChar && firstChar.toLowerCase() !== firstChar;
}
