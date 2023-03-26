export function isFirstLetterCapital(str: string) {
  const first = str.charAt(0);
  return first.toUpperCase() === first && first.toLowerCase() !== first;
}

export function isDateValid(selectedDate: string) {
  const today = new Date();
  const selected = new Date(selectedDate);
  return selected < today;
}
