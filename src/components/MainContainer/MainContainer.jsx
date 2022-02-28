import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../Pages/PagesComponents/Banner';

export default function MainContainer({ children }) {
   return (
      <main className="container">
         <div className="row">
            <div className="col">
               <Banner />
               {children}
            </div>
         </div>
      </main>
   );
}

MainContainer.propTypes = {
   children: PropTypes.element.isRequired,
};
