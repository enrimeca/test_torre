import React from 'react';

import './styles/Result.css'

class Result extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="Result">
                    <div className="Result__header">
                    </div>
            
                    <div className="Result__info">
                        <img
                            className="Result__avatar"
                            src="https://www.gravatar.com/avatar/205e4602e5b4810c08d50?d=identicon"
                            alt="Avatar"
                        />
                        <h2>
                            {this.props.personName} <br /> {this.props.personName}
                        </h2>
                    </div>
            
                    <div className="Result__detail">
                        <h3>{this.props.personName}</h3>
                        <div>@link</div>
                    </div>
            
                    <div className="Result__footer">#footer</div>
                </div>
            </div>
        );
      }
}

export default Result;