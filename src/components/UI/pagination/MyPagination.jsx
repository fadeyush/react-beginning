import React from 'react';
import classes from './MyPagination.module.css';
import {usePagesArray} from '../../../utils/pages';

const MyPagination = ({totalPages, page, changePage}) => {
  let pagesArray = usePagesArray(totalPages);
    return (
        <div className={classes.page__wrapper}>
        {pagesArray.map(p =>
          <span
              onClick={()=>changePage(p)}
              key={p}
              className={page === p ? `${classes.page__item} ${classes.page__item_active}` : classes.page__item}>
            {p}
          </span>
        )}
      </div>
    );
};

export default MyPagination;