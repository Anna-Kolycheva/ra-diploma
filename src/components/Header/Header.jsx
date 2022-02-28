import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { changeSearchField } from '../../actions/actionCreator';
import logo from '../../img/header-logo.png';

const DEFAULT_FORM_VALUE = {
   search: '',
   visible: false,
};

export default function Header() {
   const dispatch = useDispatch();
   const novigate = useNavigate();
   const [form, setForm] = useState(DEFAULT_FORM_VALUE);
   const quantity = useSelector((state) => state.cart.cart).length;

   const onSearch = (e) => {
      e.preventDefault();
      if (form.search.trim()) {
         dispatch(changeSearchField(form.search));
         setForm((prev) => ({ ...prev, search: '' }));
         novigate('/catalog');
      }
      setForm((prev) => ({ ...prev, visible: !form.visible }));
   };

   const onChangeField = (e) => {
      const { value } = e.target;
      setForm((prev) => ({ ...prev, search: value }));
   };

   return (
      <header className="container">
         <div className="row">
            <div className="col">
               <nav className="navbar navbar-expand-sm navbar-light bg-light">
                  <Link to="/" className="navbar-brand">
                     <img src={logo} alt="Bosa Noga" />
                  </Link>
                  <div className="collapase navbar-collapse" id="navbarMain">
                     <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                           <NavLink
                              to="/"
                              className={({ isActive }) =>
                                 isActive ? 'nav-link active' : 'nav-link'
                              }
                           >
                              Главная
                           </NavLink>
                        </li>

                        <li className="nav-item">
                           <NavLink
                              to="/catalog"
                              className={({ isActive }) =>
                                 isActive ? 'nav-link active' : 'nav-link'
                              }
                           >
                              Каталог
                           </NavLink>
                        </li>

                        <li className="nav-item">
                           <NavLink
                              to="/about"
                              className={({ isActive }) =>
                                 isActive ? 'nav-link active' : 'nav-link'
                              }
                           >
                              О магазине
                           </NavLink>
                        </li>

                        <li className="nav-item">
                           <NavLink
                              to="/contacts"
                              className={({ isActive }) =>
                                 isActive ? 'nav-link active' : 'nav-link'
                              }
                           >
                              Контакты
                           </NavLink>
                        </li>
                     </ul>
                     <div>
                        <div className="header-controls-pics">
                           <div
                              role="button"
                              tabIndex="0"
                              data-id="search-expander"
                              className="header-controls-pic header-controls-search"
                              onClick={onSearch}
                              onKeyPress={onSearch}
                              aria-label="Search field"
                           />
                           <Link
                              to="/cart"
                              className="header-controls-pic header-controls-cart"
                           >
                              {Boolean(quantity) && (
                                 <div className="header-controls-cart-full">
                                    {quantity}
                                 </div>
                              )}
                              <div className="header-controls-cart-menu" />
                           </Link>
                        </div>
                        <form
                           data-id="search-form"
                           className={
                              form.visible === true
                                 ? 'header-controls-search-form form-inline'
                                 : 'header-controls-search-form form-inline invisible'
                           }
                           onSubmit={onSearch}
                        >
                           <input
                              className="form-control"
                              placeholder="Поиск"
                              name="search"
                              onChange={onChangeField}
                              value={form.search}
                           />
                        </form>
                     </div>
                  </div>
               </nav>
            </div>
         </div>
      </header>
   );
}
