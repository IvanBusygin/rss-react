import { render, screen } from '@testing-library/react';
import ArticleCard from './ArticleCard';

const article = {
  author: 'Jeff Dunn',
  content:
    'Apple is once again facing accusations of cracking down on union organizers. The Communications Workers of America union (CWA)',
  description: 'The Apple Watch SE is back on sale for',
  publishedAt: '2023-04-03T14:40:32Z',
  source: { id: 'engadget', name: 'Engadget' },
  title: 'The Apple Watch SE drops back to $219',
  url: 'https://www.engadget.com/the-apple-watch-se-drops-back-to-219-144032655.html',
  urlToImage:
    'https://s.yimg.com/uu/api/res/1.2/W1NIL9wNjhSl6YHebTaADQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-09/c9c5f720-346c-11ed-bfff-3db68993c49c.cf.jpg',
};

describe('ArticleCardDetails component', () => {
  it('renders ArticleCardDetails information', () => {
    render(<ArticleCard article={article} />);

    expect(screen.getByAltText(article.title)).toBeInTheDocument();
    expect(screen.getByText(article.author)).toBeInTheDocument();
    expect(screen.getByText(article.title)).toBeInTheDocument();
  });
});
