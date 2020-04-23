import React from 'react';
import NavBar from '../components/NavBar';
import Search from '../components/Search';

class Home extends React.Component {
    render() {
        return(
            <div>
                <NavBar />
                <Search />
            </div>
        )
    }
}

export default Home;