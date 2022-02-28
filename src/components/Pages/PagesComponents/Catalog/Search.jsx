import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchField } from '../../../../actions/actionCreator';
import { fetchSearchItemsThunked } from '../../../../actions/thunks';

export default function Search() {
   const { searchValue } = useSelector((state) => state.catalog);
   const dispatch = useDispatch();

   const onCangeField = (e) => {
      const { value } = e.target;
      dispatch(changeSearchField(value));
      dispatch(fetchSearchItemsThunked());
   };

   return (
      <form
         className="catalog-search-form form-inline"
         onSubmit={(e) => e.preventDefault()}
      >
         <input
            className="form-control"
            placeholder="Поиск"
            name="search"
            value={searchValue}
            onChange={onCangeField}
         />
      </form>
   );
}
