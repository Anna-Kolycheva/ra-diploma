import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export default function Sizes({ inStock, currentSize, onChangeSize }) {
   return (
      <>
         {inStock.length ? (
            <p>
               Размеры в наличии:
               {inStock.map((size) => (
                  <span
                     className={
                        size.size === currentSize
                           ? 'catalog-item-size selected'
                           : 'catalog-item-size'
                     }
                     key={nanoid()}
                     onClick={() => onChangeSize(size.size)}
                     role="option"
                     aria-selected={size.size === currentSize}
                     tabIndex="0"
                     onKeyDown={() => onChangeSize(size.size)}
                  >
                     {size.size}
                  </span>
               ))}
            </p>
         ) : (
            <p>Нет в наличии</p>
         )}
      </>
   );
}

Sizes.defaultProps = {
   currentSize: undefined,
};

Sizes.propTypes = {
   inStock: PropTypes.arrayOf(PropTypes.object).isRequired,
   currentSize: PropTypes.string || undefined,
   onChangeSize: PropTypes.func.isRequired,
};
