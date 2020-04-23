import React from 'react';

import './styles/Result.css'

class Result extends React.Component {
    render() {
        return (
            <div className="Result">
                <div className="Result__header">
                </div>
        
                <div className="Result__info">
                    <img
                        className="Result__avatar"
                        src="https://www.gravatar.com/avatar/205e4602e5b4810c08d50?d=identicon"
                        alt="Avatar"
                    />
                    <h1>
                        Richard <br /> Kaufman
                    </h1>
                </div>
        
                <div className="Result__detail">
                    <h3>Frontend Engineer</h3>
                    <div>@sparragus</div>
                </div>
        
                <div className="Result__footer">#platziconf</div>
            </div>
        );
      }
}

export default Result;