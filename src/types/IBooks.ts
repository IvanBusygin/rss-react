export default interface IBook {
  id: number;
  title: string;
  author: string;
  genre: string;
  description: string;
  likes: number;
  downloads: number;
  views: number;
  tags: string[];
  cover: string;
  language: ILanguage;
  level: ILevel;
  unique: number;
  total: number;
}

export enum ILevel {
  'Elementary' = 'Elementary',
  'Pre-Intermediate' = 'Pre-Intermediate',
  'Intermediate' = 'Intermediate',
  'Advanced' = 'Advanced',
}

export enum ILanguage {
  'BRITISH' = 'BRITISH',
  'USA' = 'USA',
}
