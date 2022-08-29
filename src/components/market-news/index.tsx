import React from 'react';
import { useSelector } from 'react-redux';
import { isEmpty, isNil } from 'ramda';
import { selectMarketNews } from '../../store/selectors/news';

interface INews {
  category: string;
  datetime: number;
  headline: string;
  id: number;
  image: string;
  related: string;
  source: string;
  summary: string;
  url: string;
}

const BEM_BLOCK = 'c-market-news';

function MarketNewsContainer() {
  const marketNews: INews[] = useSelector(selectMarketNews);

  return (
    <>
      {!isEmpty(marketNews) && !isNil(marketNews) && (
        <div className={BEM_BLOCK}>
          <h2 className={`${BEM_BLOCK}__title`}>Market News</h2>
          <div className={`${BEM_BLOCK}__list`}>
            {marketNews.map((news: INews) => {
              return (
                <a className={`${BEM_BLOCK}__news-anchor`} href={news.url} target='_blank'>
                  <div className={`${BEM_BLOCK}__news`}>
                    <h2>{news.headline}</h2>
                    {news.image && (
                      <img src={news.image} alt={news.headline} />
                    )}
                    <p>{news.summary}</p>
                    <span>Source: {news.source}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default MarketNewsContainer;
