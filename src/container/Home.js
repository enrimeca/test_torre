import React from 'react';
import Api from '../api';
// import Axios from 'axios';
import NavBar from '../components/NavBar';
import Search from '../components/Search';
import Result from '../components/Result';

class Home extends React.Component {
    state = {
        loading: false,
        error: null,
        form: {
            personName: '',
            professionalHeadline: ''
        }      
    };

    handleChange = e => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name] : e.target.value,
            }
        });
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.setState ({ loading:true, error:null })

        try {
            const data = await Api.information.getBioInformation(`${this.state.form.personName}`);
            this.setState({ loading:false, data:data});

        }catch (error){
            this.setState({ loading:false, error:error });
        }
    };

    render() {

        return(
            <div>
                <NavBar />
                <Search 
                    onChange = {this.handleChange}
                    onSubmit = {this.handleSubmit}
                    formValues = {this.state.form}
                    error = {this.state.error}
                />
                <Result 
                />
            </div>
        )
    }
}

export default Home;