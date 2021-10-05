import React from 'react';
import StockArticles from '../component/stockPage/StockArticles';
import '../component/stockPage/stock.css';
import NetflixChart from '../component/stockPage/NetflixChart';

const Stockpage = () => (
  <div className="bg-f9f9f9">
    <NetflixChart />
    <div className="mt-5">
      <StockArticles />
    </div>
  </div>
);

export default Stockpage;
