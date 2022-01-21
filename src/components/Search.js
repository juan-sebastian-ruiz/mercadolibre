import { useState } from 'react';
import logo from '../assets/img/mercado-libre-logo.png';
import { Link } from 'react-router-dom';

export default function Search() {

  const [query, setQuery] = useState('');

  const queryChange = (e) => {
    setQuery(e.target.value);
  }

  return (
    <div className="header">
      <img className="logo" srcSet={logo} alt="mercado-libre-logo.png" />
      <div className="search-box">
        <input type="text" placeholder='Nunca dejes de buscar' onKeyUp={(e) => { queryChange(e) }} />
        <Link to={`/items?q=${query}`} className='btn-search'><span className="material-icons">search</span></Link>
      </div>
    </div>
  );
}