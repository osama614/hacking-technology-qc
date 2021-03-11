import React from 'react';

import { Page404 } from '../../assets/index';

const NotFound = () => (
  <div className="container home">
    <div className="page-not-found text-center">
      <img className="d-block m-auto" src={Page404} alt="404 page" />
      <p>عذرًا، هذه الصفحة غير موجودة.</p>
    </div>
  </div>
);

export default NotFound;
