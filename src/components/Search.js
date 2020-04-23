import React from 'react';

import './styles/Search.css';

class Navbar extends React.Component {

  handleClick = e => {
    // console.log(`Se busca el valor :`);
  }

  render() {
    return (
      <div className="search">
        <form className="form" onSubmit={this.props.onSubmit}>
          <h1 className="search__title">Búsqueda de personas: </h1>
          <input 
            className="input" 
            type="text" 
            placeholder="Ingrese un nombre . . ."          
            name = "personName"
            // value={this.props.formValues.personName}
            onChange={this.props.onChange}
          />
          <button 
            className="btn btn-primary" 
            onClick={this.handleClick} >
            Buscar
          </button>
        </form>
      </div>
    );
  }
}

export default Navbar;