import React from 'react';

import './styles/Search.css';

class Navbar extends React.Component {
  render() {
    return (
      <div className="search">
        <h1 class="search__title">Búsqueda</h1>
        <input class="input" type="text" placeholder="Buscar . . ." />
      </div>
    );
  }
}

export default Navbar;