import React from 'react';
import PropTypes from 'prop-types';
import Categories from './Categories';
import Products from './Products';
import Search from './Search';

export default function Catalog({ withSearch }) {
   return (
      <section className="catalog">
         <h2 className="text-center">Каталог</h2>
         {withSearch && <Search />}
         <div>
            <Categories />
            <Products />
         </div>
      </section>
   );
}

Catalog.defaultProps = {
   withSearch: false,
};
Catalog.propTypes = {
   withSearch: PropTypes.bool,
};
