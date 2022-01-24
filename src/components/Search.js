import { useState } from 'react';
import logo from '../assets/img/mercado-libre-logo.png';
import { useNavigate } from 'react-router-dom';

export default function Search() {

  const [query, setQuery] = useState('');

  const queryChange = (e) => {
    setQuery(e.target.value);
  }

  const navigate = useNavigate();
  const search = (e) => {
    e.preventDefault();
    navigate(`/items?search=${query}`, { replace: true });
  }

  return (
    <div className="header">
      <img className="logo" srcSet={logo} alt="mercado-libre-logo.png" />
      <form onSubmit={search}>
        <div className="search-box">
          <input type="text" placeholder='Nunca dejes de buscar' onKeyUp={(e) => { queryChange(e) }} />
          <button type='submit' className='btn-search'><span className="material-icons">search</span></button>
        </div>
      </form>
    </div>
  );
}