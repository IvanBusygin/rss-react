import { API_KEY, SERVER_URL } from './constants';

export function isFirstLetterCapital(str: string) {
  const first = str.charAt(0);
  return first.toUpperCase() === first && first.toLowerCase() !== first;
}

export function isDateValid(selectedDate: string) {
  const today = new Date();
  const selected = new Date(selectedDate);
  return selected < today;
}

export const makeUrl = (endpoint: string, query = 'apple'): string => {
  const urlOptions: { [index: string]: string } = { ...API_KEY };
  let url = `${SERVER_URL}${endpoint}?`;

  if (query.length !== 0) {
    url += `q=${query}&`;
  }

  Object.keys(urlOptions).forEach((key) => {
    url += `${key}=${urlOptions[key]}&`;
  });
  return url.slice(0, -1);
};
