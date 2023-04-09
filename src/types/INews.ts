export interface IArticle {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string;
}
export interface IDataArticle {
  articles: IArticle[];
  totalResults: number;
}
